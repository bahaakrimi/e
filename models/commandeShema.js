const mongoose = require("mongoose");
const commandeShema = new mongoose.Schema(
    {
   
        user: {
            type: String,
        },
        totalpric: {
            type: Number,
        },
        statut: {
            type: String,
        },
    },
    { timestamps: true } 
);


const commande = mongoose.model("commande", commandeShema);
module.exports = commande;