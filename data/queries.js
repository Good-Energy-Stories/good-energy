export const episodePageQuery = `*[_type == "episode"] {
  _id,
  title,
  episodeNumber,
  slug,
  fileUrl,
  content,
  schedule,
  tags[]-> {
    title
  },
  coverArt {
     asset,
     asset->{url},
     "imageAspect":asset->.metadata.dimensions.aspectRatio,
  }
} | order(episodeNumber desc) [$start...$end] `;

export const tagQuery = `*[_type == "tag"] {
 title
}`;

export const guestQuery = `*[_type == "guest"] {
 _id,
 name,
 description,
 links,
 "relatedEpisodes": *[_type=="episode" && references(^._id)]{ 
  title,
    episodeNumber,
    slug
 }
}`;

export const pageInfoQuery = `*[_type == "info"] {
 description,
 networkDescription,
 subscriptionInformation
}[0]`;
