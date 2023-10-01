import Joi from "joi";

const id = Joi.string().uuid();
const id_number =  Joi.string().min(3).max(50);
const name = Joi.string().min(3).max(50);
const password = Joi.string().min(3).max(50);
const insurance_entity = Joi.string().min(3).max(50);
const blood_type = Joi.string().length(2);
const allergies = Joi.array().items(Joi.string().min(3).max(50));
const underlying_diseases = Joi.array().items(Joi.string().min(3).max(50));
const fingerprint = Joi.string().min(3).max(50);

export const createUserSchema = Joi.object({
    id_number: id_number.required(),
    name: name.required(),
    password: password.required(),
    insurance_entity: insurance_entity.required(),
    blood_type: blood_type.required(),
    allergies: allergies.required(),
    underlying_diseases: underlying_diseases.required(),
    fingerprint: fingerprint.required(),
});

export const getUserSchema = Joi.object({
    id: id.required(),
});

export const loginUserSchema = Joi.object({
    id_number: id_number.required(),
    password: password.required(),
});

export const userSchema = Joi.object({
    id: id,
    id_number: id_number,
    name: name,
    password: password,
    insurance_entity: insurance_entity,
    blood_type: blood_type,
    allergies: allergies,
    underlying_diseases: underlying_diseases,
    fingerprint: fingerprint,
});