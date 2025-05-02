var express = require('express');
var router = express.Router();
const paiementController =require('../controllers/paiementController');
/* GET home page. */
router.post('/addpaiement', paiementController.addpaiement );
router.get('/getAllCommande', paiementController.getAllCommande );
router.delete('/deletecommandeById/:id', paiementController.deletecommandeById );



module.exports = router;
