import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'mask'
})
export class MaskPipe implements PipeTransform {

	transform(
		value: string,
		count: number = 4,
		mask: string = 'X',
		from: 'left' | 'center' | 'right' = 'center'
	): string {
		if (count > value.length)
			return Array(value.length + 1).join(mask)

		if (from == 'left')
			return this.maskLeft(value, count, mask)

		if (from == 'right')
			return this.maskRight(value, count, mask)

		return this.maskCenter(value, count, mask)
	}

	maskLeft(value: string, count: number, mask: string): string {
		return Array(count + 1)
				.join(mask)
				.concat(value.slice(count))
	}

	maskCenter(value: string, count: number, mask: string): string {
		const isValueEven = value.length % 2 == 0
		const isCountEven = count % 2 == 0

		const maskText = Array(count + 1).join(mask)

		// El texto se reemplaza con 1 caracter a la izquierda y el resto al centro
		if (isValueEven && !isCountEven) {
			return value.substring(0, (value.length/ 2) - ((count - 1)/2)) + maskText + value.substring((value.length / 2) + (count/2) + 1, value.length)
		}

		// El texto se reemplaza con 1 caracter a la izquierda y el resto al centro
		if (!isValueEven && isCountEven) {
			return value.substring(0, (value.length / 2) - (count - 1)/2) + maskText + value.substring((value.length / 2) + (count/2) + 1, value.length)
		}

		// El texto se remplace 100% en el centro
		return value.substring(0, (value.length / 2) - (count/2)) + maskText + value.substring((value.length / 2) + (count/2), value.length)
	}

	maskRight(value: string, count: number, mask: string): string {
		return value.slice(0, count * -1) + Array(count + 1).join(mask)
	}

}
