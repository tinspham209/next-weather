import { Weather } from "@/app/types";
import { convertKelvinToCelsius, getIcon, upperCaseString } from "@/app/utils";
import * as weatherIcons from "../../utils/icons.json";
interface HomeProps {
	weather: Weather;
	location: string;
}

export default function PageData({ weather, location }: HomeProps) {
	const formatWeather = {
		temperature: convertKelvinToCelsius(weather?.main?.temp),
		feelsLike: convertKelvinToCelsius(weather?.main?.feels_like),
		humidity: weather?.main?.humidity || null,
		wind: weather?.wind?.speed || null,
		id: weather?.weather ? weather?.weather[0].id : "200",
	};

	const getCurrentIcon = () => {
		if (weather) {
			return getIcon(
				// @ts-ignore: Unreachable code error
				weatherIcons.icons[formatWeather.id]
			);
		} else {
			return getIcon(weatherIcons.icons[200]);
		}
	};

	return (
		<>
			<div className="flex items-center justify-center text-8xl">
				<div className={getCurrentIcon()} style={{ color: "purple" }}></div>
			</div>
			<div className="flex flex-col items-center justify-center ">
				<b className="text-5xl text-slate-800 mt-8 mb-8">
					{upperCaseString(location)} Weather Data
				</b>
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
					{stats.map(({ name, attr, unit }) => (
						<div
							key={attr}
							className="flex flex-col items-center justify-center mx-10"
						>
							<p className="text-2xl text-[#71717A] mb-4 font-bold">{name}</p>
							<p className="font-bold text-3xl">
								{formatWeather[attr as keyof typeof formatWeather]}
								{unit}
							</p>
						</div>
					))}
				</div>
			</div>
		</>
	);
}

export const stats = [
	{
		name: "TEMPERATURE",
		attr: "temperature",
		unit: "°C",
	},
	{
		name: "FEELS LIKE",
		attr: "feelsLike",
		unit: "°C",
	},
	{
		name: "WIND",
		attr: "wind",
		unit: "mph",
	},
	{
		name: "HUMIDITY",
		attr: "humidity",
		unit: "%",
	},
];
