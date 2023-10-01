import { Hospital } from "../models/hospital.model";

import {
    IsNotEmpty,
    IsString,
    Length,
} from "class-validator";

export interface GetHospitalDTO extends Pick<Hospital, "name" | "username" | "password" > {}

export interface ICreateHospitalDTO extends Omit<Hospital, "id"> {}

export class CreateHospitalDTO implements ICreateHospitalDTO {
    @IsNotEmpty()
    @IsString()
    @Length(3, 50)
    name: string;

    @IsNotEmpty()
    @IsString()
    @Length(3, 50)
    username: string;

    @IsNotEmpty()
    @IsString()
    @Length(3, 50)
    password: string;
}

export interface ILoginHospitalDTO extends Pick<Hospital, "username" | "password"> {}

export class LoginHospitalDTO implements ILoginHospitalDTO {
    @IsNotEmpty()
    @IsString()
    @Length(3, 50)
    username: string;

    @IsNotEmpty()
    @IsString()
    @Length(3, 50)
    password: string;
}

export interface AuthHospitalDTO extends Pick<Hospital, "id" | "token"> {}