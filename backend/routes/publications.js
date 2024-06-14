module.exports =  app => {
  const publication = require("../controllers/publication.js");
  let router = require("express").Router();

  // Retrieve all publication
  // router.get("/", publication.getAuteur);
  router.get("/", (publication.getAuteur));

  app.use("/api/publication", router);
};
