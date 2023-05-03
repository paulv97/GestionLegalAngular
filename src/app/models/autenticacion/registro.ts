export interface RegistroRequest {
	Usuario: string
	Clave: string
	RepClave: string
	Pin: string
	NumeroIdentificacion: string
	FechaNacimiento: Date | string
	NumeroCuenta: string
}
