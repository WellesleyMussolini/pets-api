import { Pet } from "../models/pet.model.js"
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

export const pet = {
    get: async (request, response) => {
        const get_all_pets = await Pet.find();
        return response.status(200).json(get_all_pets);
    },

    get_param: async (request, response) => {
        try {
          const { param } = request.params;
          let find_pet;
          if (mongoose.Types.ObjectId.isValid(param)) {
            // if the param is a valid id, it will search by id
            find_pet = await Pet.findById(param);
          } else {
            // if isn't a valid id, it'll assume that is a search by a breed
            const breed = param.replace(/-/g, ' '); 
            const lowercase_breed_search = new RegExp(breed, "i"); 
            // find_pet = await Pet.findOne({ breed: lowercase_breed_search });
            find_pet = await Pet.findOne({ breed: lowercase_breed_search });
          }
          if (!find_pet) {
            return response.status(404).json({ message: "Pet not found" });
          }
          return response.status(200).json(find_pet);
        } catch (error) {
          console.error(error);
          return response.status(500).json({ message: "Error finding pet" });
        }
      },
    post: async (request, response) => {
        try {
            const create_pet = request.body;
            const pet = await Pet.create(create_pet);
            return response.status(201).send(pet);
        } catch {
            return response.json({ error: "Failed to create a pet" });
        }
    },
    put: async (request, response) => {
        try {
            const { id } = request.params;
            await Pet.findByIdAndUpdate(id, request.body);
            return response.status(200).json({ message: "Pet has been updated!" });
        } catch {
            return response.status(404).json({ error: "Failed to update pet" });
        }
    },
    delete: async (request, response) => {
        try {
            const { id } = request.params;
            const delete_pet = await Pet.findByIdAndDelete(id);
            if (!delete_pet) response.status(404).json({ message: "Pet does not exist!" });
            return response.status(200).json({ message: "Pet successfully deteled!" });
        } catch {
            return response.status(404).json({ error: "Failed to delete the pet!" });
        }
    },
};