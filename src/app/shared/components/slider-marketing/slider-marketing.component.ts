import { Component, HostBinding, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { RecursoGrafico } from 'src/app/models/marketing/marketing';
import { fadeInOut } from '../../animations/animations';
import { MarketingService } from '../../services/api/marketing/marketing.service';

@Component({
	selector: 'app-slider-marketing',
	templateUrl: './slider-marketing.component.html',
	styleUrls: ['./slider-marketing.component.scss'],
	encapsulation: ViewEncapsulation.None,
	animations: [fadeInOut]
})
export class SliderMarketingComponent implements OnInit {

	@Input('containerClass') containerClass: string = 'w-full grid-col-12 border-1 border-solid color-box-border bg-white rounded overflow-hidden'
	@Input('categoria') codigoCategoria: number = 0

	recursos: RecursoGrafico[] = []

	constructor(
		private _marketingService: MarketingService,
	) { }

	@HostBinding('class') get HeadingClass() {
		return this.recursos.length > 0 ? this.containerClass : 'w-0 h-0 display-none'
	}

	ngOnInit(): void {
		this.obtenerRecursos()
	}

	obtenerRecursos() {
		this._marketingService.obtenerRecursos(this.codigoCategoria)
		.subscribe(api => this.recursos = api.data)
	}

}
