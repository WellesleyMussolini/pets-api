import mongoose from "mongoose";
const { Schema, Types } = mongoose;
const { ObjectId } = Types;

const PetSchema = new Schema({
    id: ObjectId,
    breed: {
        type: String,
        required: true,
    },
    life_span: {
        type: Object,
        required: true,
        en:{
            type: String,
            required: false,
        },
        ptBr:{
            type: String,
            required: false,
        },
    },
    breed_traits: {
        type: Object,
        required: true,
        en:{
            type: String,
            required: false,
        },
        ptBr:{
            type: String,
            required: false,
        },
    },
    description: {
        type: Object,
        required: true,
        en:{
            type: String,
            required: false,
        },
        ptBr:{
            type: String,
            required: false,
        },
    },
    temperament: {
        type: Object,
        required: true,
        en:{
            type: String,
            required: false,
        },
        ptBr:{
            type: String,
            required: false,
        },
    },
    intelligence: {
        type: Object,
        required: true,
        en:{
            type: String,
            required: false,
        },
        ptBr:{
            type: String,
            required: false,
        },
    },
    breed_group: {
        type: Object,
        required: true,
        en:{
            type: String,
            required: false,
        },
        ptBr:{
            type: String,
            required: false,
        },
    },
    breed_size: {
        type: Object,
        required: true,
        en:{
            type: String,
            required: false,
        },
        ptBr:{
            type: String,
            required: false,
        },
    },
    breed_characteristics: {
        type: Object,
        required: true,
        en:{
            type: Array,
            required: false,
        },
        ptBr:{
            type: Array,
            required: false,
        },
    },
    fun_facts: {
        type: Array,
        required: false,
        en:{
            type: Array,
            required: false,
        },
        ptBr:{
            type: Array,
            required: false,
        },
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
        type: Object,
        required: true,
        profile: {
            type: Array,
            required: true,
        },
        puppies: {
            type: Array,
            require: true,
        },
        gallery: {
            type: Array,
            required: true,
        }
    },
});

export const Pet = mongoose.model("Pet", PetSchema);