var express = require('express');
const kite_controlers= require('../controllers/kite');
var router = express.Router();

/* GET costumes */
router.get('/', kite_controlers.kite_view_all_Page );
module.exports = router;




