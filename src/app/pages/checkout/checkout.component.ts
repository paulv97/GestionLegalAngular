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
			numeroTarjeta: new FormControl(null, [Validators.required]),
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

}
