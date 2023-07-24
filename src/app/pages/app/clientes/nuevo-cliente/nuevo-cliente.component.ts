import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-nuevo-cliente',
  templateUrl: './nuevo-cliente.component.html',
  styleUrls: ['./nuevo-cliente.component.scss']
})
export class NuevoClienteComponent implements OnInit {

  form: FormGroup

  constructor(
		private _modalRef: NzModalRef,
		private _messageService: NzMessageService,
	) {
    this.form = new FormGroup({

    })
  }

  ngOnInit(): void {
  }

}
