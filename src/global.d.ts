export {}

declare global {
	interface Date {
		addDays(days: number): Date;
	}

	interface String {
		isNullOrEmpty(this: string): boolean;
	}
}
