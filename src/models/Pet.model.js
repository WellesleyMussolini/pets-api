import mongoose from "mongoose";
const { Schema } = mongoose;
const { ObjectId } = Schema;

const PetSchema = new Schema({
    id: ObjectId,
    breed: {
        type: String,
        required: true,
    },
    life_span: {
        type: String,
        required: true,
    },
    breed_traits: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    temperament: {
        type: String,
        require: true,
    },
    intelligence: {
        type: String,
        required: true,
    },
    breed_group: {
        type: String,
        required: true,
    },
    breed_size: {
        type: String,
        required: true,
    },
    breed_characteristics: {
        type: Object,
        required: true,
    },
    fun_facts: {
        type: String,
        required: false,
    },
    weight: {
        type: Object,
        required: true,
        male: {
            type: Object,
            required: true,
            kg: {
                type: String,
            },
            pounds: {
                type: String,
            }
        },
        female: {
            type: Object,
            required: true,
            kg: {
                type: String,
            },
            pounds: {
                type: String,
            }
        },
    },
    images: {
        type: Array,
        required: true,
        profile: {
            type: Object,
            required: false,
        },
        puppies: {
            type: Array,
            require: false,
        },
    },
});

export const Pet = mongoose.model("Pet", PetSchema);