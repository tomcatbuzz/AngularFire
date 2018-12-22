import * as functions from "firebase-functions";
const http = require('requestify');
const cors = require('cors')({origin: true})

export const darkSkyProxy = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    const lat = req.query.lat
    const lng = req.query.lng

    const url = formatUrl(lat, lng)

    return http.get(url).then(response => {
      return res.status(200).send(response.getBody());
    })
    .catch(err => {
      return res.status(400).send(err)
    })
  });
});

function formatUrl(lat, lng) {
  const DARK_SKY_KEY = functions.config().darksky.key
  console.log(DARK_SKY_KEY)
  return `https://api.darksky.net/forecast/${DARK_SKY_KEY}/${lat},${lng}`
}
