/* Extracted from v-calendar */
export type DatePickerModel = DatePickerDate | DatePickerRangeObject
export type DateSource = Date | string | number
export type DatePickerDate = DateSource | Partial<SimpleDateParts> | null

export interface DatePickerRangeObject {
	start: Exclude<DatePickerDate, null>
	end: Exclude<DatePickerDate, null>
}

export interface SimpleDateParts {
	year: number
	month: number
	day: number
	hours: number
	minutes: number
	seconds: number
	milliseconds: number
}
