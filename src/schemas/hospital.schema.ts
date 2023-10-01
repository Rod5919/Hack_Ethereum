import Joi from "joi";

const id = Joi.string().uuid();
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

export const loginHospitalSchema = Joi.object({
    username: username.required(),
    password: password.required(),
});

export const hospitalSchema = Joi.object({
    id: id,
    name: name,
});