import { Pet } from "../models/pet.model.js";
import mongoose from "mongoose";

export const PetService = {
    async findByParam(param) {
        let find_pet;
        if (mongoose.Types.ObjectId.isValid(param)) {
            find_pet = await Pet.findById(param); // if the param is a valid id, it will search by id
        } else {
            // if isn't a valid id, it'll assume that is a breed
            const breed = param.replace(/-/g, " ");
            const lowercase_breed_search = new RegExp(breed, "i");
            find_pet = await Pet.findOne({ breed: lowercase_breed_search });
            return find_pet;
        }
        return find_pet; 
    }
};