import { Pet } from "../models/Pet.model.js"

export const pet = {
    get: async (request, response) => {
        const get_all_pets = await Pet.find();
        return response.status(200).json(get_all_pets);
    },
    get_by_id: async (request, response) => {
        try {
            const { id } = request.params;
            const find_pet = await Pet.findById(id);
            if (!find_pet) response.status(404).json({ message: "Pet does not exist!" });
            return response.status(200).send(find_pet) || response.status(200).json(find_pet);
        } catch {
            return response.status(404).json({ error: "Incorrect pet id" });
        }
    },
    post: async (request, response) => {
        try{
            const create_pet = await Pet.create(request.body);
            return response.status(201).send(create_pet);
        }catch{
            return response.json({error: "Failed to create a pet..."});
        }
    },
    put: async (request, response) => {
        try {
            const { id } = request.params;
            await Pet.findByIdAndUpdate(id, request.body);
            return response.status(200).json({ message: "Pet has been updated!" });
        } catch {
            return response.status(404).json({ error: "Failed to update pet... Please, try again later" });
        }
    },
    delete: async (request, response) => {
        try {
            const { id } = request.params;
            const delete_pet = await Pet.findByIdAndDelete(id);
            if (!delete_pet) response.status(404).json({ message: "Pet does not exist!" });
            return response.status(200).json({message: "Pet successfully deteled!"});
        } catch {
            return response.status(404).json({ error: "Failed to delete the pet... Please, try again later" });
        }
    },
};