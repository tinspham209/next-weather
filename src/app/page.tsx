import getCurrentWeather, { IWeatherParams } from "./actions/getCurrentWeather";
import PageData from "./containers/page-data";
import { Weather } from "./types";
interface HomeProps {
	searchParams: IWeatherParams;
}

export default async function Home({ searchParams }: HomeProps) {
	const currentWeather: Weather = await getCurrentWeather(searchParams);
	const location = searchParams?.location || "Danang";

	return (
		<div>
			<PageData weather={currentWeather} location={location} />
		</div>
	);
}
