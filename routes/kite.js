var express = require('express');
const kite_controlers= require('../controllers/kite');
var router = express.Router();

// A little function to check if we have an authorized user and continue on
//or
// redirect to login.
const secured = (req, res, next) => {
if (req.user){
return next();
}
req.session.returnTo = req.originalUrl;
res.redirect("/login");
}

//GET request for one soaps.
router.get('/', kite_controlers.kite_view_all_Page);
router.get('/detail',secured, kite_controlers.kite_view_one_Page);
router.get('/create', secured,kite_controlers.kite_create_Page);

router.get('/delete',secured, kite_controlers.kite_delete_Page);

router.get('/update', secured,kite_controlers.kite_update_Page);

/* GET costumes */
router.get('/', kite_controlers.kite_view_all_Page );

/* GET detail costume page */
router.get('/detail', kite_controlers.kite_view_one_Page);

/* GET create costume page */
router.get('/create', kite_controlers.kite_create_Page);

/* GET create update page */
router.get('/update', kite_controlers.kite_update_Page);

/* GET delete costume page */
router.get('/delete', kite_controlers.kite_delete_Page);



module.exports = router;





