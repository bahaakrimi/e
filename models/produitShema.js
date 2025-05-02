const mongoose = require("mongoose");


const produitShema = new mongoose.Schema(
    {
   
        nomproduit: {
            type: String,
        },
        prix: {
            type: Number,
          
        },
    },
    { timestamps: true } 
);


const produit = mongoose.model("produit", produitShema);
module.exports = produit;