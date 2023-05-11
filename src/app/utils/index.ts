export const getIcon = (id: { icon: string; label: string }) => {
	const prefix = "wi wi-";
	return prefix + id.icon;
};

const roundNumber = (num: number) => {
	if (!num) return null;
	return Math.round((num + Number.EPSILON) * 100) / 100;
};

export const convertKelvinToCelsius = (val: number) => {
	if (!val) return null;
	return roundNumber(val - 273.15);
};

export const upperCaseString = (str: string) => {
	return str.charAt(0).toUpperCase() + str.slice(1);
};

export const getCurrentHour = () => {
	const dateText = new Date().toLocaleTimeString("en-GB", {
		hour: "numeric",
		minute: "numeric",
	});
	return dateText;
};
