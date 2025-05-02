const produitModel = require('../models/produitShema');

module.exports.getAllProduit = async (req, res) => {
    try {
      const produitList = await produitModel.find();
  
      if (!produitList || produitList.length === 0) {
        throw new Error("Aucun produit trouvé");
      }
  
      res.status(200).json(produitList);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  module.exports.getProduitById = async (req, res) => {
    try {
      const id = req.params.id;
      const produit = await produitModel.findById(id).populate("owner");
  
      if (!produit || produit.length === 0) {
        throw new Error("produit introuvable");
      }
  
      res.status(200).json(produit);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  module.exports.deleteProduitById = async (req, res) => {
    try {
      const id = req.params.id;
  
      const produitById = await produitModel.findById(id);
  
      if (!produitById || produitById.length === 0) {
        throw new Error("produit introuvable");
      }
  
        
      await userModel.updateMany({}, {
          $pull: { cars: id },
        });
  
      await produitModel.findByIdAndDelete(id);
  
      res.status(200).json("deleted");
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  module.exports.addProduit = async (req, res) => {
    try {
      const { nomproduit, prix } = req.body;
  
      if (!nomproduit & !prix ) {
        throw new Error("errue data");
      }
  
      const produit = await produitModel.create({
        nomproduit,
        prix,
      });
  
      res.status(200).json({ produit });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  module.exports.updateProduit = async (req, res) => {
    try {
      const id = req.params.id;
      const { nomproduit, prix} = req.body;
  
      const produitById = await produitModel.findById(id);
  
      if (!produitById) {
        throw new Error("produit introuvable");
      }
  
      if (!nomproduit & !prix) {
        throw new Error("errue data");
      }
  
      await produitModel.findByIdAndUpdate(id, {
        $set: { nomproduit, prix},
      });
  
      const updated = await produitModel.findById(id);
  
      res.status(200).json({ updated });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  