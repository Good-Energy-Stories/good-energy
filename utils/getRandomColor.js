import randomColor from "randomcolor";
import { palatteArray, darkPalatteArray } from "./colors";
export const getRandomColor = () => {
	const color = palatteArray[Math.floor(Math.random() * palatteArray.length)];

	return color;
};
export const getRandomDarkColor = () => {
	const color =
		darkPalatteArray[Math.floor(Math.random() * darkPalatteArray.length)];

	return color;
};

export const getRandomColors = (length) => {
	return Array.from({ length }, getRandomColor);
};
