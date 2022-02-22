import sanity from "../../lib/sanity";
import { v4 as uuidv4 } from "uuid";

const createSanityComment = async (data) => {
  const { _id, content, timestamp } = data;
  let stx = sanity.transaction();

  /* Create comment */
  const commentTransaction = await stx.create({
    _type: "comment",
    episode: {
      _type: "reference",
      _ref: _id,
    },
    content,
    timestamp,
  });
  const result = await stx.commit();

  console.log("commentTransaction: ", result);

  const commentId = result?.documentIds[0];
  return commentId;
};

const appendCommentToEpisode = async (data, commentId) => {
  if (commentId) {
    const { _id } = data;

    let stx = sanity.transaction();

    /* Add comment to episode */
    const episodeTransaction = await stx.patch(_id, (patch) =>
      patch.setIfMissing({ comments: [] }).append("comments", [
        {
          _key: uuidv4(),
          _type: "reference",
          _ref: commentId,
        },
      ])
    );
    const result = await stx.commit();
    console.log("episodeTransaction: ", episodeTransaction);
  }
};

export default async function createComment(req, res) {
  const data = JSON.parse(req.body);
  try {
    console.log("commemmemmeemnt");
    const commentId = await createSanityComment(data);
    await appendCommentToEpisode(data, commentId);

    console.log("result ", result);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: `Couldn't submit comment`, err });
  }
  return res.status(200).json({ message: "Comment submitted" });
}
