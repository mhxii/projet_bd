const db = require("../models");
const Publication = db.publication;


exports.getAuteur = async (req, res) => {
    try {
        const authors = await Publication.find();
        res.status(200).json(authors);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
};
