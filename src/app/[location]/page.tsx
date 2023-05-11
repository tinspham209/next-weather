import { Metadata } from "next";
import getCurrentWeather from "../actions/getCurrentWeather";
import PageData from "../containers/page-data";
import { convertKelvinToCelsius } from "../utils";
import { upperCaseString } from "../utils";
import { getMetaData } from "../utils/metadata";

export const dynamic = "auto";

export const revalidate = 120;

export async function generateMetadata({
	params,
}: {
	params: { location: string };
}): Promise<Metadata> {
	const data = await getCurrentWeather(params);

	const formatWeather = {
		temperature: convertKelvinToCelsius(data?.main?.temp),
		feelsLike: convertKelvinToCelsius(data?.main?.feels_like),
		humidity: data?.main?.humidity || null,
		wind: data?.wind?.speed || null,
	};

	return getMetaData({
		title: `${upperCaseString(params.location)} Weather Data`,
		description: `Temperature: ${formatWeather.temperature}°C, Feels Like: ${formatWeather.feelsLike}°C, Humidity: ${formatWeather.humidity}, Wind: ${formatWeather.wind}`,
	});
}

export default async function Location({
	params,
}: {
	params: { location: string };
}) {
	const data = await getCurrentWeather(params);

	return <PageData weather={data} location={params.location} />;
}
