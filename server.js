const express = require("express");

const app = express();

app.use(express.json());

app.post("/github-webhook", (req, res) => {
  console.log("Webhook reçu !");
  console.log(req.body);

  res.status(200).send("OK");
});

app.listen(3000, () => {
  console.log("Serveur démarré sur le port 3000");
});
