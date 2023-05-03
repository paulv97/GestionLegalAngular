import { Component, OnInit } from '@angular/core';
import { LatLng, Map, Marker, icon, latLng, layerGroup, tileLayer } from 'leaflet';

@Component({
	selector: 'app-servicios-judiciales',
	templateUrl: './servicios-judiciales.component.html',
	styleUrls: ['./servicios-judiciales.component.scss']
})
export class ServiciosJudicialesComponent implements OnInit {

	options = {
		layers: [
			tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
				attribution: '&copy; OpenStreetMap contributors'
			})
		],
		zoom: 14,
		center: latLng(-2.899367000569575, -79.0031147003174)
	};

	map!: Map;

	busqueda: string = ''

	categoriaSeleccionada: any
	categorias = [
		{
			label: 'Unidades judiciales',
			value: '1'
		},
		{
			label: 'Notarias',
			value: '2'
		},
		{
			label: 'Centros de mediación',
			value: '3'
		},
	]

	puntos = [
		{
			categoria: 1,
			icono: 'https://img2.freepng.es/20180628/ijc/kisspng-gavel-auction-computer-icons-download-judiciary-5b35477c355f22.4457362315302183642186.jpg',
			coords: [
				[-2.891952125534096, -78.99611949920656],
				[-2.899667023392755, -78.9867639541626],
				[-2.9015528793160343, -79.02676105499269],
				[-2.911925030602814, -79.00427341461183]
			]
		},
		{
			categoria: 2,
			icono: 'https://cdn-icons-png.flaticon.com/512/6489/6489814.png',
			coords: [
				[-2.885523003891847, -78.98882389068605],
				[-2.8895519243797, -79.01139736175539],
				[-2.908924831355613, -79.00332927703859],
				[-2.9151823807372965, -79.01620388031007],
			]
		},
		{
			categoria: 3,
			icono: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIN86bylGN6mHkmlaoS6QjjbDPkyfddXhsnA&usqp=CAU',
			coords: [
				[-2.9042102164129715, -78.97783756256105],
				[-2.9004385102869583, -78.98985385894777],
				[-2.9114107112991725, -78.9996385574341],
				[-2.8966667915813424, -79.00332927703859],
				[-2.895552417740571, -79.02341365814209],
				[-2.9125250694935745, -79.02478694915771],
			]
		},
	]

	markers!: L.LayerGroup;

	constructor() { }

	ngOnInit(): void {
	}

	onMapReady(map: L.Map) {
		this.map = map
		this.markers = layerGroup().addTo(this.map)
	}

	resetMap() {
		this.markers.clearLayers()
		this.map.removeLayer(this.markers)
		this.markers = layerGroup().addTo(this.map)
	}


	buscar() {
		if (this.categoriaSeleccionada.length == 0) return

		this.resetMap()
		const categorias = this.puntos.filter(p => this.categoriaSeleccionada.includes(p.categoria.toString()))

		categorias.forEach(p => {
			p.coords.forEach(c => {
				const marker = new Marker(new LatLng(c[0], c[1]), {
					icon: icon({
						iconUrl: p.icono,
						iconSize: [36, 36],
						iconAnchor: [12, 40],
						popupAnchor: [1, -34],
						tooltipAnchor: [16, -28],
					})
				})

				marker.on('click', (e) => {
					const location = e.latlng
					console.log([location.lat, location.lng])
				})

				this.markers.addLayer(marker)
			})
		})
	}

}
