import "./globals.css";
import { Nunito } from "next/font/google";
import ClientOnly from "./providers/ClientOnly";
import ToasterProvider from "./providers/Toaster";
import { getMetaData } from "./utils/metadata";
const font = Nunito({ subsets: ["latin"] });

export const metadata = getMetaData({});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head>
				<link
					rel="stylesheet"
					type="text/css"
					href="https://cdnjs.cloudflare.com/ajax/libs/weather-icons/2.0.9/css/weather-icons.min.css"
				/>
			</head>

			<body className={font.className}>
				<ClientOnly>
					<ToasterProvider />
				</ClientOnly>
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
						// fontFamily: "Clash",
						backgroundColor: "white",
						backgroundImage:
							"radial-gradient(circle at 25px 25px, lightgray 2%, transparent 0%), radial-gradient(circle at 75px 75px, lightgray 2%, transparent 0%)",
						backgroundSize: "100px 100px",
					}}
				>
					{children}
				</div>
			</body>
		</html>
	);
}
