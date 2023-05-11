export interface Weather {
	coord: WeatherCoord;
	weather: WeatherElement[];
	base: string;
	main: WeatherMain;
	visibility: number;
	wind: WeatherWind;
	clouds: WeatherClouds;
	dt: number;
	sys: WeatherSys;
	timezone: number;
	id: number;
	name: string;
	cod: number;
}

export interface WeatherClouds {
	all: number;
}

export interface WeatherCoord {
	lon: number;
	lat: number;
}

export interface WeatherMain {
	temp: number;
	feels_like: number;
	temp_min: number;
	temp_max: number;
	pressure: number;
	humidity: number;
}

export interface WeatherSys {
	type: number;
	id: number;
	country: string;
	sunrise: number;
	sunset: number;
}

export interface WeatherElement {
	id: string;
	main: string;
	description: string;
	icon: string;
}

export interface WeatherWind {
	speed: number;
	deg: number;
}
