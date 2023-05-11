import { toast } from "react-hot-toast";

export interface IWeatherParams {
	location?: string;
}

const OPENWEATHERMAP_API = `https://api.openweathermap.org/data/2.5/weather`;
const OPENWEATHERMAP_APP_ID = process.env.NEXT_PUBLIC_OPENWEATHER_APP_ID;

export default async function getCurrentWeather(params: IWeatherParams) {
	const { location } = params;
	const defaultCityName = "Danang";

	return await fetch(
		`${OPENWEATHERMAP_API}/?q=${
			location || defaultCityName
		}&unit=metric&APPID=${OPENWEATHERMAP_APP_ID}`,
		{
			next: {
				revalidate: 60,
			},
		}
	)
		.then((res) => {
			const obj = res.json();
			return obj;
		})
		.catch((error) => {
			console.log("error: ", error);
			toast.error(
				`Failed to fetch weather in ${params.location}: ${JSON.stringify(
					error
				)}`
			);
		});
}
