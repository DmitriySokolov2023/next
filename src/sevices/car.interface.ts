export interface ICar {
	id: number
	stamp: string
	model: string
	year: number
	cost: number
	image: string
	mileage: number
	owners: number
}

export interface ICarData {
	cars: ICar[]
}
export interface ICarDataSingle {
	car: ICar
}
