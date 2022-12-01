const Pet = require('../models/pets.model');

class PetController {
    async get_pet(request, response) {
        try {
            const pet = await Pet.find();
            return response.send({ pet });
        } catch (error) {
            return response.status(400).send(error);
        }
    }

    async get_pet_by_id(request, response) {
        try {
            const { id } = request.params;
            const pet = await Pet.findById(id);
            return response.send({ pet });
        } catch (error) {
            return response.status(400).send(error);
        }
    }

    async create_pet(request, response) {
        try {
            const { breed } = request.body;
            await Pet.create(request.body);
            return response.send({resp: `Pet: ${breed} criado!`} );
        } catch (error) {
            return response.status(400).send(error);
        }
    }

    async update_pet(request, response) {
        try {
            const { id } = request.params;
            const petEdited = await Pet.findByIdAndUpdate(id, request.body);
            return response.send({ petEdited });
        } catch (error) {
            return response.status(400).send(error);
        }
    }

    async delete_pet(request, response) {
        try {
            const { id } = request.params;
            const pet = await Pet.findByIdAndDelete(id);
            return response.send({ resp: `Pet ${pet.breed} deletado!` });
        } catch (error) {
            return response.status(400).send(error);
        }
    }
}

module.exports = { PetController };