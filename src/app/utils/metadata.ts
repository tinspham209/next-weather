import { Metadata } from "next";

export const DOMAIN_PRODUCT = "https://weather.tinspham.dev";

type SafeMetaData = {
	title?: string;
	description?: string;
	url?: string;
};

export const getMetaData = ({
	title = "Get the weather of any given location",
	description = "Get the weather of any given location. Built with Next.JS",
	url = DOMAIN_PRODUCT,
}: SafeMetaData): Metadata => {
	return {
		title: `${title}`,
		description: description,

		twitter: {
			card: "summary_large_image",
			title: `${title}`,
			description: description,
			creator: "@tinspham209",
		},

		openGraph: {
			type: "website",
			url: url,
			title: `${title}`,
			description: description,
		},
		metadataBase: new URL(DOMAIN_PRODUCT),
		themeColor: "#FFF",
	};
};
