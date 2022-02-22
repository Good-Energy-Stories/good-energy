import Cors from "cors";
import crypto from "crypto";
const getRawBody = require("raw-body");

// Initializing the cors middleware
const cors = Cors({
  methods: ["GET", "HEAD"],
});

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

async function handler(req, res) {
  // Run the middleware
  await runMiddleware(req, res, cors);
  console.log(req.body);

  /** Get request integrity header **/
  const hmac = req.headers["x-educated-guess-rss-hmac-sha256"];

  if (hmac !== "<XUX8}5-zA[gA5PM") {
    console.error("Unable to verify from our server");
    return res.status(200).json({ error: "Unable to verify from our server" });
  }

  const {
    body: {
      value: { id },
    },
  } = req;

  res.json({ message: id });

  // Rest of the API logic
  //res.json({ message: "Hello Everyone!" });
}

export default handler;
