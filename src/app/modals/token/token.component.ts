import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, ViewChildren } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzModalModule, NzModalRef } from 'ng-zorro-antd/modal';
import { finalize } from 'rxjs';
import { ErrorResponse, MessageResponse } from 'src/app/models/app/response';
import { TokenService } from 'src/app/shared/services/api/autenticacion/token.service';

@Component({
	selector: 'app-token',
	standalone: true,
	imports: [CommonModule, ReactiveFormsModule, NzModalModule, NzButtonModule, NzInputModule],
	templateUrl: './token.component.html',
	styleUrls: ['./token.component.scss']
})
export class TokenComponent implements OnInit {

	form: FormGroup
	formInputs: string[] = ['inp0','inp1','inp2','inp3','inp4','inp5']
	@ViewChildren('formRow') rows: any;

	deleteBefore: boolean = false
	isLoading: boolean = false
	errors: MessageResponse[] | null = null

	intentos: number = 0

	@Input() guid!: string;

	constructor(
		private _tokenService: TokenService,
		public _modal: NzModalRef,
	) {
		this.form = new FormGroup({
			inp0: new FormControl(null, [Validators.required, Validators.pattern('[0-9]'), Validators.maxLength(1)]),
			inp1: new FormControl(null, [Validators.required, Validators.pattern('[0-9]'), Validators.maxLength(1)]),
			inp2: new FormControl(null, [Validators.required, Validators.pattern('[0-9]'), Validators.maxLength(1)]),
			inp3: new FormControl(null, [Validators.required, Validators.pattern('[0-9]'), Validators.maxLength(1)]),
			inp4: new FormControl(null, [Validators.required, Validators.pattern('[0-9]'), Validators.maxLength(1)]),
			inp5: new FormControl(null, [Validators.required, Validators.pattern('[0-9]'), Validators.maxLength(1)]),
		})
	}

	ngOnInit(): void {
	}

	getFormValue() {
		let value: string = ''
		this.formInputs.forEach(e => value += this.form.get(e)?.value)

		return value
	}

	keyUpEvent(event: any, index: number) {
		let pos = index;

		if (event.keyCode === 8 && event.which === 8) {
			pos = index - 1

			if (pos >= 0 && this.deleteBefore)
				this.form.get(`inp${pos}`)?.setValue(null)
		} else {
			pos = index + 1
		}

		this.checkForDeleteBefore(index)

		const formInp = this.form.get(`inp${index}`)

		if (formInp?.value != null && formInp?.invalid) {
			this.form.get(`inp${index}`)?.setValue(null)
		} else {
			this.changeFocus(pos)
		}
	}

	changeFocus(next: number) {
		if (next < 0 || next >= this.formInputs.length)
			return

		this.rows._results[next].nativeElement.focus()
	}

	checkForDeleteBefore(index: number) {
		this.deleteBefore = this.form.get(`inp${index}`)?.value == null || this.form.get(`inp${index}`)?.value.length < 1
	}

	verificarToken() {
		if (this.form.invalid) {
			this.form.markAllAsTouched()
			return
		}

		this.isLoading = true
		const token = this.getFormValue()

		this._tokenService.autorizarTransaccion(this.guid, token)
		.pipe(finalize(() => this.isLoading = false))
		.subscribe(() => {
			this.intentos = 0
			this._modal.close(true)
		}, (error: ErrorResponse) => {
			this.errors = error.messages
			this.intentos++

			if (this.errors[0].code == '-0004-02-03') // token incorrecto
				this.form.reset()
		})
	}

	onPaste(event: ClipboardEvent) {
		const clipboardData = event.clipboardData || (<any>window).clipboardData
		let pastedText = clipboardData.getData('text')
		pastedText = pastedText.substring(0, 7)

		for (let i = 0; i < pastedText.length; i++) {
			this.form.get(`inp${i}`)?.setValue(pastedText.charAt(i))
			this.changeFocus(i)
		}
	}

}
