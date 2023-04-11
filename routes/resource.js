var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var kite_controller = require('../controllers/kite');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post('/kite', kite_controller.kite_create_post);
// DELETE request to delete Costume.
router.delete('/kite/:id', kite_controller.kite_delete);
// PUT request to update Costume.
router.put('/kite/:id', kite_controller.kite_update_put);
// GET request for one Costume.
router.get('/kite/:id', kite_controller.kite_detail);
// GET request for list of all Costume items.
router.get('/kite', kite_controller.kite_list);
module.exports = router;


