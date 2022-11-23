const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());

app.get("/", (req, res) => {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ error: "Missing URL parameter" });
  }

  const http = require("http");
  http.get(url, (response) => {
    res.set({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept",
    });

    response.pipe(res);
  });
});

app.listen(PORT, () => {
  console.log(`CORS Anywhere server is running on port ${PORT}`);
});
