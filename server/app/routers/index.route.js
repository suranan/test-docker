const express = require('express');
const router = express.Router();

/* GET api listing. */
router.get('/', (req, res) => {
    res.send('api works');
});

require('./user.route')(router);
require('./invoice.route')(router);

module.exports = router;