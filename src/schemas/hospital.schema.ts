import Joi from "joi";

const id = Joi.number().integer().min(1);
const name = Joi.string().min(3).max(50);
const username = Joi.string().min(3).max(50);
const password = Joi.string().min(3).max(50);

export const getHospitalSchema = Joi.object({
    id: id.required(),
});

export const createHospitalSchema = Joi.object({
    name: name.required(),
    username: username.required(),
    password: password.required(),
});

export const deleteHospitalSchema = Joi.object({
    id: id.required(),
});

export const contactSchema = Joi.object({
    id: id,
    name: name,
});