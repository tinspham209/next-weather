import { ImageResponse } from "next/server";
import getCurrentWeather from "../actions/getCurrentWeather";
import { stats } from "../containers/page-data";
import {
	convertKelvinToCelsius,
	getCurrentHour,
	getIcon,
	upperCaseString,
} from "../utils";
import * as weatherIcons from "../utils/icons.json";

export const alt = "Weather Data";

export const contentType = "image/png";
export const runtime = "edge";

export default async function LocationOG({
	params,
}: {
	params: { location: string };
}) {
	const font = await fetch(
		new URL("../fonts/ClashDisplay-Semibold.otf", import.meta.url)
	).then((res) => res.arrayBuffer());

	const weather = await getCurrentWeather(params);

	const formatWeather = {
		temperature: convertKelvinToCelsius(weather?.main?.temp),
		feelsLike: convertKelvinToCelsius(weather?.main?.feels_like),
		humidity: weather?.main?.humidity || null,
		wind: weather?.wind?.speed || null,
		id: weather?.weather ? weather?.weather[0].id : "200",
	};

	return new ImageResponse(
		(
			<div
				style={{
					height: "100%",
					width: "100%",
					display: "flex",
					textAlign: "center",
					alignItems: "center",
					justifyContent: "center",
					flexDirection: "column",
					flexWrap: "nowrap",
					fontFamily: "Clash",
					backgroundColor: "white",
					backgroundImage:
						"radial-gradient(circle at 25px 25px, lightgray 2%, transparent 0%), radial-gradient(circle at 75px 75px, lightgray 2%, transparent 0%)",
					backgroundSize: "100px 100px",
				}}
			>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						marginBottom: "-30px",
						fontSize: 100,
					}}
				>
					⛅
				</div>
				<div tw="flex flex-col items-center justify-center mt-10">
					<b
						style={{
							fontSize: 60,
							color: "black",
							lineHeight: 1.8,
						}}
					>
						{upperCaseString(params.location)} Weather Data ({getCurrentHour()})
					</b>
					<div
						tw="flex"
						style={{
							fontSize: 48,
							color: "black",
						}}
					>
						{stats.map(({ name, attr, unit }) => (
							<div
								key={attr}
								tw="flex flex-col items-center justify-center mx-10"
							>
								<p
									style={{
										fontSize: 28,
										color: "#71717A",
										marginBottom: "-36px",
									}}
								>
									{name}
								</p>
								<p>
									{formatWeather[attr as keyof typeof formatWeather]}
									{unit}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		),
		{
			width: 1200,
			height: 600,
			fonts: [
				{
					name: "Clash",
					data: font,
				},
			],
			emoji: "blobmoji",
		}
	);
}
