import { Hospital } from "../models/hospital.model";
import {
  GetHospitalDTO,
  CreateHospitalDTO,
  DeleteHospitalDTO,
  UpdateHospitalDTO,
  LoginHospitalDTO,
  AuthHospitalDTO,
} from "../dtos/hospital.dto";
import { GetUserDTO } from "../dtos/user.dto";

import boom from "@hapi/boom";
export class HospitalService {
  constructor() {}

  async getHospitals(): Promise<GetUserDTO[] | string> {
    return "hola mundo";
  }

  async getHospital(id: Hospital["id"]): Promise<GetHospitalDTO | string> {
    return "hola mundo";
  }

  async createHospital(
    name: Hospital["name"],
    hospital: CreateHospitalDTO
  ): Promise<GetHospitalDTO | string> {
    return "hola mundo";
  }

  async updateHospital(
    id: Hospital["id"],
    hospital: UpdateHospitalDTO
  ): Promise<GetHospitalDTO | string> {
    return "hola mundo";
  }

  async deleteHospital(id: Hospital["id"]): Promise<DeleteHospitalDTO | string> {
    return "hola mundo";
  }

  async loginHospital(
    hospital: LoginHospitalDTO
  ): Promise<AuthHospitalDTO | string> {
    return "hola mundo";
  }
}
