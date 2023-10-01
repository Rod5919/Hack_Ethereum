import { Hospital } from "../models/hospital.model";
import {
  GetHospitalDTO,
  CreateHospitalDTO,
  LoginHospitalDTO,
  AuthHospitalDTO,
} from "../dtos/hospital.dto";

import { read_from_ipfs, write_to_ipfs, DB } from "../db";
import boom from "@hapi/boom";
import { v4 as uuidv4 } from "uuid";
import { hashPassword, comparePassword } from "../utils/auth/pass-hash";
export class HospitalService {
  constructor() {}

  async get(id: Hospital["id"]): Promise<GetHospitalDTO | string> {
    const data = await read_from_ipfs(DB.HOSPITALS);
    if (!data) throw boom.notFound("No hay hospitales");
    const hospital = data.find((hospital: Hospital) => hospital.id === id);
    if (!hospital) throw boom.notFound("No existe el hospital");
    return hospital;
  }

  async create(hospital: CreateHospitalDTO): Promise<GetHospitalDTO | string> {
    const new_hospital: Hospital = {
      id: uuidv4(),
      ...hospital,
      password: await hashPassword(hospital.password),
    };
    write_to_ipfs(new_hospital, DB.HOSPITALS);
    return new_hospital;
  }

  async login(hospital: LoginHospitalDTO): Promise<AuthHospitalDTO | string> {
    const data = await read_from_ipfs(DB.HOSPITALS);
    if (!data) throw boom.notFound("No hay hospitales");
    const hospital_index = data.findIndex(
      (hospital: Hospital) =>
        hospital.username === hospital.username &&
        comparePassword(hospital.password, hospital.password)
    );
    if (hospital_index === -1) throw boom.notFound("No existe el hospital");
    return {
      id: data[hospital_index].id,
      token: "token",
    };
  }
}
