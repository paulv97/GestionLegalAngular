import { ChartDataset, ChartOptions } from 'chart.js';
import { Component, OnInit } from '@angular/core';
import { RecursoGrafico } from 'src/app/models/marketing/marketing';
import { MarketingService } from 'src/app/shared/services/api/marketing/marketing.service';
import { fadeInOut } from 'src/app/shared/animations/animations';

@Component({
	selector: 'app-inicio',
	templateUrl: './inicio.component.html',
	styleUrls: ['./inicio.component.scss'],
	animations: [fadeInOut]
})
export class InicioComponent implements OnInit {

	chartData: ChartDataset[] = [
		{
			label: '$',
			data: [3500, 1688, 1800, 2789, 2124, 2124],
			pointHitRadius: 15,
			pointHoverRadius: 8,
			pointRadius: 2,
			borderColor: getComputedStyle(document.documentElement).getPropertyValue('--primary'),
			pointBackgroundColor: getComputedStyle(document.documentElement).getPropertyValue('--primary'),
			pointHoverBackgroundColor: getComputedStyle(document.documentElement).getPropertyValue('--primary'),
			borderWidth: 2,
			hoverBorderWidth: 0,
			pointBorderWidth: 0,
			tension: 0.3,
		}
	];

	chartLabels: string[] = ['10/01/2022', '10/02/2022', '10/03/2022', '10/04/2022', '10/05/2022', '10/06/2022'];
	chartOptions: ChartOptions = {
		responsive: true,
		maintainAspectRatio: false,
		scales: {
			xAxis: {
				display: false,
				grid: {
					drawBorder: false
				}
			},
			yAxis: {
				display: false
			}
		},
		plugins: {
			legend: {
				display: false
			},
			tooltip: {
				backgroundColor: 'rgba(255,255,255,0.9)',
				displayColors: false,
				padding: 10,
				titleColor: '#131E33',
				titleFont: {
					size: 15
				},
				bodyColor: '#34363A',
				bodyFont: {
					size: 13
				}
			}
		}
	};

	recursos: RecursoGrafico[] = []

	constructor(
		private _marketingService: MarketingService,
	) { }

	ngOnInit(): void {
		this.obtenerRecursos()
	}

	obtenerRecursos() {
		this._marketingService.obtenerRecursos(1)
		.subscribe(api => this.recursos = api.data)
	}

}
