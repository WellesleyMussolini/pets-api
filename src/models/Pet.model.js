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

    },
});

export const Pet = mongoose.model("Pet", PetSchema);