import { Pet } from "../models/pet.model.js";
import mongoose from "mongoose";

export const PetService = {
    async findByParam(param) {
        try {
            if (mongoose.Types.ObjectId.isValid(param)) {
                return await Pet.findById(param); // if the param is a valid id, it will search by id
            } else {
                // if it isn't a valid id, it'll assume that it is a breed
                const breed = param.replace(/-/g, " ");
                const lowercase_breed_search = new RegExp(breed, "i");
                return await Pet.findOne({ breed: lowercase_breed_search });
            }
        } catch {
            throw new Error("Error finding pet");
        }
    },
    async findByLang(param, language) {
        const pet = await this.findByParam(param);

        const languages = {
            en: "en",
            ptBr: "ptBr",
        };

        if (languages.hasOwnProperty(language)) {
            const langKey = languages[language];
            return {
                breed: pet.breed,
                life_span: pet.life_span[langKey],
                breed_traits: pet.breed_traits[langKey],
                description: pet.description[langKey],
                temperament: pet.temperament[langKey],
                intelligence: pet.intelligence[langKey],
                breed_group: pet.breed_group[langKey],
                breed_size: pet.breed_size[langKey],
                weight: pet.weight,
                images: pet.images,
                breed_characteristics: pet.breed_characteristics[langKey],
            };
        } else {
            throw new Error("Language not supported");
        }
        
    },
};