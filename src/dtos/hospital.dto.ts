import { Hospital } from "../models/hospital.model";

import {
    IsNotEmpty,
    IsNumber,
    Min,
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

export interface DeleteHospitalDTO extends Omit<Hospital, "createdAt"> {}

export interface IUpdateHospitalDTO extends Pick<Hospital, "name"> {}

export class UpdateHospitalDTO implements IUpdateHospitalDTO {
    @IsNotEmpty()
    @IsNumber()
    @Min(1)
    id: number;

    @IsNotEmpty()
    @IsString()
    @Length(3, 50)
    name: string;
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