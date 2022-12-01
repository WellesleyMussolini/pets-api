const express = require("express");
const pet_router = express.Router();

const { PetController } = require("../controllers/pet.controller");
const pet = new PetController();

pet_router.get("/pet", pet.get_pet);

pet_router.get("/pet/:id", pet.get_pet_by_id);

pet_router.post("/pet", pet.create_pet);

pet_router.put("/pet/:id", pet.update_pet);

pet_router.delete("/pet/:id", pet.delete_pet);

module.exports = pet_router;