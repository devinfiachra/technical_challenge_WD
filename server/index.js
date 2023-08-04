const express = require("express");
const app = express();
const phonesData = require("../data/phones.json");

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/phones", (req, res) => {
  res.json(phonesData);
});

app.get("/phones/:id", (req, res) => {
  let { id } = req.params;

  const phone = phonesData[id];

  res.send(phone);
});

app.listen(3000, () => {
  console.log(`Server running on PORT: 3000`);
});
