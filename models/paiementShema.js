const mongoose = require("mongoose");
const paiementShema = new mongoose.Schema(
    {
   
        order: {
            type: String,
        },
        payementmethod: {
            type: String,
        },
        statut: {
            type: String,
        },
    },
    { timestamps: true } 
);


const paiement = mongoose.model("paiement", paiementShema);
module.exports = paiement;