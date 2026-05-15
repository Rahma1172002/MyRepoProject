const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Application fonctionne sur Kubernetes ");
});

app.listen(3000, () => {
  console.log("Serveur démarré");
});
