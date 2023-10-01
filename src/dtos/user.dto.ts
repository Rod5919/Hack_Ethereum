import { User } from "../models/user.model";

import {
    IsNotEmpty,
    IsString,
    Length,
    IsNumber,
    Min,
} from "class-validator";

export interface GetUserDTO extends Pick<User, "id_number" | "name" | "insurance_entity" | "blood_type" | "allergies" | "underlying_diseases" | "fingerprint"> {}

export interface DeleteUserDTO extends Pick<User, "id" | "name"> {}

export interface IUpdateUserDTO extends Pick<User, "insurance_entity" | "blood_type" | "allergies" | "underlying_diseases"> {}

export class UpdateUserDTO implements IUpdateUserDTO {
    @IsNotEmpty()
    @IsNumber()
    @Min(1)
    id: number;

    @IsNotEmpty()
    @IsString()
    @Length(3, 50)
    name: string;

    @IsNotEmpty()
    @IsString()
    @Length(3, 50)
    insurance_entity: string;

    @IsNotEmpty()
    @IsString()
    @Length(3, 50)
    blood_type: string;

    @IsNotEmpty()
    @IsString({ each: true })
    @Length(3, 50, { each: true })
    allergies: string[];

    @IsNotEmpty()
    @IsString({ each: true })
    @Length(3, 50, { each: true })
    underlying_diseases: string[];
}

export interface ICreateUserDTO extends Pick<User, "id_number" | "name" | "password" | "insurance_entity" | "blood_type" | "allergies" | "underlying_diseases" | "fingerprint"> {}

export class CreateUserDTO implements ICreateUserDTO {
    @IsNotEmpty()
    @IsString()
    @Length(3, 50)
    id_number: string;

    @IsNotEmpty()
    @IsString()
    @Length(3, 50)
    name: string;

    @IsNotEmpty()
    @IsString()
    @Length(3, 50)
    password: string;

    @IsNotEmpty()
    @IsString()
    @Length(3, 50)
    insurance_entity: string;

    @IsNotEmpty()
    @IsString()
    @Length(3, 50)
    blood_type: string;

    @IsNotEmpty()
    @IsString({ each: true })
    @Length(3, 50, { each: true })
    allergies: string[];

    @IsNotEmpty()
    @IsString({ each: true })
    @Length(3, 50, { each: true })
    underlying_diseases: string[];

    @IsNotEmpty()
    @IsString()
    @Length(3, 50)
    fingerprint: string;
}

export interface LoginUserDTO extends Pick<User, "id_number" | "password"> {}

export class LoginUserDTO {
    @IsNotEmpty()
    @IsString()
    @Length(3, 50)
    id_number: string;

    @IsNotEmpty()
    @IsString()
    @Length(3, 50)
    password: string;
}

export interface AuthUserDTO extends Pick<User, "id" | "token"> {}