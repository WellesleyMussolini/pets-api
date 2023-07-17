import { Pet } from "../schemas/pet.schema.js";
import mongoose from "mongoose";
import { removeSpecialChars } from "../utils/removeSpecialChars.js";

export const PetService = {
    async findByParam(param) {
        try {
            if (mongoose.Types.ObjectId.isValid(param)) return await Pet.findById(param); // If the param is a valid ID, it will search by ID

            // If it isn't a valid ID, it'll assume that it is a breed
            const normalizedBreed = removeSpecialChars(param).replace(/-/g, " ").toLowerCase();
            const regex = new RegExp(`^${normalizedBreed}$`, "i");

            return await Pet.findOne({
                $or: [
                    { breed: regex },
                    { "breed.en": regex },
                    { "breed.ptBr": regex },
                ],
            });
        } catch (error) {
            throw new Error("Error finding pet");
        }
    },
    async findByLang(param, language) {
        const pet = await this.findByParam(param);

        const languages = {
            en: "en",
            ptBr: "ptBr",
        };

        if (!languages.hasOwnProperty(language)) {
            throw new Error("Language not supported");
        }

        const langKey = languages[language];
        const breed = pet.breed;
        const breedText = typeof breed === "string" ? breed : breed[langKey];

        return {
            breed: breedText,
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
    },
};