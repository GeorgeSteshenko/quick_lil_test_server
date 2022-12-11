const express = require("express");

const app = express();

app.post("/api/v1/install", (req, res) => {
  res.json({ status: "ok" });
});

app.post("/api/v1/cmps", (req, res) => {
  res.send();
});

app.post("/", (req, res) => {
  res.json([
    {
      asd: "qwe",
    },
  ]);
});

app.listen(1234, () => console.log("Sarvar is running on :1234"));
