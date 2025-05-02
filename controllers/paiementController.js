const paiementModel = require('../models/paiementShema');
module.exports.addpaiement = async (req, res) => {
    try {
      const { order, payementmethod, statut } = req.body;
  
      if (!order & !payementmethod & !statut ) {
        throw new Error("errue data");
      }
  
      const paiement = await paiementModel.create({
        order,
        payementmethod,
        statut,
      });
      res.status(200).json({ paiement });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  module.exports.getAllCommande = async (req, res) => {
    try {
      const paiementList = await paiementModel.find();
  
      if (!paiementList || paiementList.length === 0) {
        throw new Error("Aucun paiment trouvé");
      }
  
      res.status(200).json(paiementList);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  module.exports.deletecommandeById = async (req, res) => {
    try {
      const id = req.params.id;
  
      const paiementById = await paiementModel.findById(id);
  
      if (!paiementById || paiementById.length === 0) {
        throw new Error("paiment introuvable");
      }
  
        
      await userModel.updateMany({}, {
          $pull: { cars: id },
        });
  
      await paiementModel.findByIdAndDelete(id);
  
      res.status(200).json("deleted");
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  