export const groupBy = (arr: any = [], key: string) => {
	let map = new Map()

	for (let i = 0; i < arr.length; i++) {
		const s = JSON.stringify(arr[i][key])
		if (!map.has(s)) {
			map.set(s, {
				label: arr[i][key],
				data: [arr[i]],
			})
		} else {
			map.get(s).data.push(arr[i]);
		}
	}
	const res = Array.from(map.values())
	return res
}
