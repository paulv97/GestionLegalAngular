import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { finalize, firstValueFrom } from 'rxjs';
import { LocalStorageService } from 'src/app/shared/services/local-storage/local-storage.service';
import { PlanesService } from 'src/app/shared/services/planes/planes.service';

@Component({
	selector: 'app-checkout',
	templateUrl: './checkout.component.html',
	styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

	isLoadingPlan: boolean = false
	isLoadingPago: boolean = false
	plan: any

	form: FormGroup

	constructor(
		private message: NzMessageService,
		private router: Router,
		private route: ActivatedRoute,
    	private planesService: PlanesService,
		private localStorage: LocalStorageService,
	) {
		this.form = new FormGroup({
			idPlan: new FormControl(null, [Validators.required]),
			numeroTarjeta: new FormControl(null, [Validators.required, Validators.pattern(/^(\d{4}){3}\d{4}$/)]),
			expiracionTarjeta: new FormControl(null, [Validators.required]),
			cvvTarjeta: new FormControl(null, [Validators.required]),
			titularTarjeta: new FormControl(null, [Validators.required]),
		})
	}

	ngOnInit(): void {
		this.obtenerPlanEscogido()
	}

	obtenerPlanEscogido() {
		const idPlan = this.route.snapshot.paramMap.get('idPlan')
		this.isLoadingPlan = true
		this.planesService.obtenerPlan(idPlan)
		.pipe(finalize(() => this.isLoadingPlan = false))
		.subscribe(
			(plan: any) => {
				this.plan = plan
				console.log('plan', this.plan)
				this.form.get('idPlan')?.setValue(idPlan)
			},
			(err) => {
				console.log(err)
				this.message.error(err.error.mensaje)
			}
		)
	}

	async realizarPago() {
		if (this.form.invalid) {
			this.form.markAllAsTouched()
			this.message.error('Los campos marcados son obligatorios')
			return
		}

		this.isLoadingPago = true
		try {
			const form = this.form.getRawValue()
			const idUsuario = this.localStorage.getInformation().idUsuario

			await firstValueFrom(this.planesService.registrarTarjeta({
				numero: form.numeroTarjeta,
				fechaVence: form.expiracionTarjeta,
				cvc: form.cvvTarjeta,
				titularTarjeta: form.titularTarjeta
			}))

			console.log('Despues de regitrar tarjeta')
			await firstValueFrom(this.planesService.procesarPago({
				idUsuario: idUsuario,
				idPlan: form.idPlan,
				renovacionAutomatica: 'N',
				numeroTarjeta: form.numeroTarjeta,
				nombreTitular: form.titularTarjeta,
				fechaExpiracion: form.expiracionTarjeta,
				cvv: form.cvvTarjeta
			}))

			console.log('Despues de procesar pago')
		}
		catch(err: any){
			this.message.error(err.error.mensaje)
		}
		finally {
			this.isLoadingPago = false
		}
	}

	obtenerTipoTarjeta(numeroTarjeta: any) {
		const tiposTarjeta = [
			{
				tipo: 'Visa',
				url: 'https://upload.wikimedia.org/wikipedia/commons/1/16/Former_Visa_%28company%29_logo.svg',
				patron: /^4\d{3}-?\d{4}-?\d{4}-?\d{4}$/
			},
			{
				tipo: 'Mastercard',
				url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/1280px-MasterCard_Logo.svg.png',
				patron: /^5[1-5]\d{2}-?\d{4}-?\d{4}-?\d{4}$/
			},
			{
				tipo: 'American Express',
				url: 'https://1000logos.net/wp-content/uploads/2016/10/American-Express-Color.png',
				patron: /^3[47]\d{2}-?\d{6}-?\d{5}$/
			},
		];

		const numeroLimpio = numeroTarjeta.replace(/[^0-9]/g, '');

		for (const tipo of tiposTarjeta) {
			if (tipo.patron.test(numeroLimpio)) {
				return tipo.url;
			}
		}

		return null;
	}

}
