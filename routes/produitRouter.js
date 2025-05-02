var express = require('express');
var router = express.Router();
const produitController =require('../controllers/produitController');
/* GET home page. */
router.get('/getAllProduit',produitController.getAllProduit);
router.get('/getProduitById',produitController.getProduitById);
router.delete('/deleteProduitById/:id',produitController.deleteProduitById);
router.post('/addProduit',produitController.addProduit);
router.put('/updateProduit/:id',produitController.updateProduit);






module.exports = router;
