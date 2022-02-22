import { getRandomColor } from "./";

const getMediaInformation = (array) =>
	array.map((e) => ({
		...e,
		id: e._id,
		contentType: e.contentType,
		tracks: e.tracks,
		color: getRandomColor(0.8, "bright"),
		detailColor: getRandomColor(1, "dark"),
		trackArt: e?.audioArt ?? null,
	}));

export default getMediaInformation;
