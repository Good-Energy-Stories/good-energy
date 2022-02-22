import sanityClient from "@sanity/client";

console.log("process.env.SANITY_API_TOKEN: ", process.env.SANITY_API_TOKEN);

export default sanityClient({
	projectId: "ancrfj29",
	dataset: "production",
	useCdn: true,
	token: process.env.SANITY_API_TOKEN,
});
