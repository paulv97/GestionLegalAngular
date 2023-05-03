import { Component, OnInit } from '@angular/core';
import { fadeInOut } from 'src/app/shared/animations/animations';

@Component({
	selector: 'app-preguntas-frecuentes',
	templateUrl: './preguntas-frecuentes.component.html',
	styleUrls: ['./preguntas-frecuentes.component.scss'],
	animations: [
		fadeInOut
	]
})
export class PreguntasFrecuentesComponent implements OnInit {

	busqueda: string = ''
	preguntasFrecuentes = [
		{
			pregunta: "¿Cómo puedo acceder a la aplicación web de gestión legal para abogados?",
			respuesta: "La aplicación web está disponible para su acceso en línea a través de un navegador web. Simplemente ingrese la dirección web de la aplicación en el navegador de su elección para comenzar."
		},
		{
			pregunta: "¿Puedo usar la aplicación en dispositivos móviles?",
			respuesta: "Sí, la aplicación es compatible con dispositivos móviles y se puede acceder a ella a través de cualquier navegador móvil."
		},
		{
			pregunta: "¿Cómo puedo agregar casos a la aplicación?",
			respuesta: "Puede agregar casos a la aplicación manualmente ingresando la información del caso o importar datos de un archivo CSV."
		},
		{
			pregunta: "¿Cómo puedo realizar un seguimiento del tiempo dedicado a un caso específico?",
			respuesta: "La aplicación incluye una función de seguimiento de tiempo integrada que permite a los abogados registrar el tiempo dedicado a un caso específico."
		},
		{
			pregunta: "¿Cómo puedo facturar a mis clientes a través de la aplicación?",
			respuesta: "Por el momento no es posible facturar clientes a través de la aplicación."
		},
		{
			pregunta: "¿Cómo puedo asegurarme de que mi información esté segura en la aplicación?",
			respuesta: "La aplicación utiliza medidas de seguridad avanzadas para proteger sus datos, incluyendo encriptación de datos y autenticación de usuario."
		},
		{
			pregunta: "¿Qué tipo de informes puedo generar a través de la aplicación?",
			respuesta: "La aplicación le permite generar una variedad de informes, incluidos informes de tiempo y gastos, e informes de caso"
		},
		{
			pregunta: "¿Cómo puedo obtener soporte técnico si tengo algún problema con la aplicación?",
			respuesta: "La aplicación incluye una función de soporte técnico integrada que le permite enviar un mensaje al equipo de soporte en caso de tener algún problema o duda con la aplicación."
		},
	]

	itemsEncontrados = this.preguntasFrecuentes.length

	constructor() { }

	ngOnInit(): void {
	}

	onBusquedaChange(busqueda: string) {
		const elementos = this.preguntasFrecuentes.filter( p => {
			return p.pregunta.includes(busqueda) || p.respuesta.includes(busqueda)
		})

		this.itemsEncontrados = elementos.length
	}

}
