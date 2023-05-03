import { Injectable } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { finalize, map, Subject, Subscriber } from 'rxjs';
import { TokenComponent } from './token.component';

@Injectable({
	providedIn: 'root'
})
export class TokenComponentService {

	constructor(
		private _modal: NzModalService,
	) { }

	abrirModalToken(guid: string) {
		let sub = new Subject<boolean>()

		const m = this._modal.create({
			nzContent: TokenComponent,
			nzClosable: false,
			nzFooter: null,
			nzMaskClosable: false,
			nzClassName: 'modal-no-spacing',
			nzComponentParams: {
				guid: guid
			}
		})

		m.afterClose
		.pipe(finalize(() => sub.unsubscribe()))
		.subscribe(data => {
			sub.next(data === true)
		})

		return sub
	}

}
