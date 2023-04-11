var kite = require('../models/kite');
// List of all Costumes
exports.kite_list = function(req, res) {
res.send('NOT IMPLEMENTED: kite list');
};
// for a specific Costume.
exports.kite_detail = function(req, res) {
res.send('NOT IMPLEMENTED: kite detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.kite_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: kite create POST');
};
// Handle Costume delete form on DELETE.
exports.kite_delete = function(req, res) {
res.send('NOT IMPLEMENTED: kite delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.kite_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: kite update PUT' + req.params.id);
};
