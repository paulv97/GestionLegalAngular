import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'usd'
})
export class UsdPipe implements PipeTransform {

	transform(value: any, symbol: string = '$'): unknown {
		if (isNaN(value)) {
			console.log('no es numero')
			return value
		}

		let textParsed = new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: 'USD',
			minimumFractionDigits: 2,
		}).format(Number(value))

		textParsed = textParsed.split('.').join('X').split('X').join('.').replace('X', ',').replace('$', symbol)

		return textParsed
	}

}
