const commandeModel = require('../models/commandeShema');
module.exports.addCommande = async (req, res) => {
    try {
      const { user, totalpric, statut } = req.body;
  
      if (!user & !totalpric & !statut ) {
        throw new Error("errue data");
      }
  
      const commande = await commandeModel.create({
        user,
        totalpric,
        statut,
      });
      res.status(200).json({ commande });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  module.exports.getAllCommande = async (req, res) => {
    try {
      const commandeList = await commandeModel.find();
  
      if (!commandeList || commandeList.length === 0) {
        throw new Error("Aucun produit trouvé");
      }
  
      res.status(200).json(commandeList);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  module.exports.getCommandeById = async (req, res) => {
    try {
      const id = req.params.id;
      const commande = await commandeModel.findById(id).populate("owner");
  
      if (!commande || commande.length === 0) {
        throw new Error("produit introuvable");
      }
  
      res.status(200).json(commande);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  module.exports.updateCommende = async (req, res) => {
    try {
      const id = req.params.id;
      const { user, totalpric,statut} = req.body;
  
      const commandetById = await commandeModel.findById(id);
  
      if (!produitById) {
        throw new Error("commande introuvable");
      }
  
      if (!user & !totalpric & !statut) {
        throw new Error("errue data");
      }
  
      await commandeModel.findByIdAndUpdate(id, {
        $set: { user, totalpric, statut},
      });
  
      const updated = await commandeModel.findById(id);
  
      res.status(200).json({ updated });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  module.exports.deletecommandeById = async (req, res) => {
    try {
      const id = req.params.id;
  
      const commeandetById = await commandeModel.findById(id);
  
      if (!commeandetById || commeandetById.length === 0) {
        throw new Error("commande introuvable");
      }
  
        
      await userModel.updateMany({}, {
          $pull: { cars: id },
        });
  
      await commandeModel.findByIdAndDelete(id);
  
      res.status(200).json("deleted");
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  