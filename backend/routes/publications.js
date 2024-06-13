const router = require('express').Router();
let Publication = require('../models/publication');

router.route('/authors').get((req, res) => {
  Publication.distinct('author')
    .then(authors => res.json(authors))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
