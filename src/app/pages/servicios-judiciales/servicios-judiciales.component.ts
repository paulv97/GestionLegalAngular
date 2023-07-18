import { Component, OnInit } from '@angular/core';
import { LatLng, Map, Marker, icon, latLng, layerGroup, tileLayer } from 'leaflet';
import { firstValueFrom } from 'rxjs';
import { ServiciosJudicialesService } from 'src/app/shared/services/servicios-judiciales/servicios-judiciales.service';

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
	categorias: any = []

	markers!: L.LayerGroup;

	buscando = false

	constructor(
		private serviciosJudiciales: ServiciosJudicialesService,
	) { }

	ngOnInit(): void {
		this.cargarCategorias()
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

	cargarCategorias() {
		this.serviciosJudiciales.obtenerCategorias()
		.subscribe(resp => {
			console.log(resp)
			this.categorias = resp
		})
	}

	async obtenerUbicaciones(idCategoria: number): Promise<any> {
		const resp = await firstValueFrom(this.serviciosJudiciales.obtenerUbicaciones(idCategoria))
		return resp
	}

	async buscar() {
		if (this.categoriaSeleccionada.length == 0) return

		console.log('Categorias seleccionadas', this.categoriaSeleccionada)

		this.buscando = true
		
		try {
			this.resetMap()

			let puntos: any[] = []
			for(let i=0; i<this.categoriaSeleccionada.length; i++) {
				const ubicaciones = await this.obtenerUbicaciones(this.categoriaSeleccionada[i])
				puntos = puntos.concat(ubicaciones)
			}

			console.log(puntos)
	
			puntos.forEach(p => {
				const marker = new Marker(new LatLng(p.latitud, p.longitud), {
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
		} finally {
			this.buscando = false
		}
		
	}

}
