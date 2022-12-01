const mongoose = require("../database/pet.database");

const petSchema = new mongoose.Schema({
    name: String,
    breed: {
        type: String,
        required: true,
        unique: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Pet = mongoose.model("Pet", petSchema);
module.exports = Pet;