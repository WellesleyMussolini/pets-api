import mongoose from "mongoose";
const { Schema, Types } = mongoose;
const { ObjectId } = Types;

const BreedSchema = new Schema({
    en: {
        type: String,
        required: true,
    },
    ptBr: {
        type: String,
        required: true,
    },
});

const PetSchema = new Schema({
    id: ObjectId,
    breed: {
        type: Schema.Types.Mixed,
        required: true,
        validate: {
            validator: function (value) {
                if (typeof value === "string") {
                    return true;
                } else if (typeof value === "object") {
                    const { en, ptBr } = value;
                    return typeof en === "string" && typeof ptBr === "string";
                }
                return false;
            },
            message: "Breed must be a string or an object with 'en' and 'ptBr' properties",
        },
    },
    life_span: {
        type: Object,
        required: true,
        en: {
            type: String,
            required: false,
        },
        ptBr: {
            type: String,
            required: false,
        },
    },
    breed_traits: {
        type: Object,
        required: true,
        en: {
            type: String,
            required: false,
        },
        ptBr: {
            type: String,
            required: false,
        },
    },
    description: {
        type: Object,
        required: true,
        en: {
            type: String,
            required: false,
        },
        ptBr: {
            type: String,
            required: false,
        },
    },
    temperament: {
        type: Object,
        required: true,
        en: {
            type: String,
            required: false,
        },
        ptBr: {
            type: String,
            required: false,
        },
    },
    intelligence: {
        type: Object,
        required: true,
        en: {
            type: String,
            required: false,
        },
        ptBr: {
            type: String,
            required: false,
        },
    },
    breed_group: {
        type: Object,
        required: true,
        en: {
            type: String,
            required: false,
        },
        ptBr: {
            type: String,
            required: false,
        },
    },
    breed_size: {
        type: Object,
        required: true,
        en: {
            type: String,
            required: false,
        },
        ptBr: {
            type: String,
            required: false,
        },
    },
    breed_characteristics: {
        type: Object,
        required: true,
        en: {
            type: Array,
            required: false,
        },
        ptBr: {
            type: Array,
            required: false,
        },
    },
    fun_facts: {
        type: Array,
        required: false,
        en: {
            type: Array,
            required: false,
        },
        ptBr: {
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