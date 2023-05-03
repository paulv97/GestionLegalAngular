Date.prototype.addDays = function (days: number): Date {
    let date = this;
	date.setDate(date.getDate() + days)

	return date
}
