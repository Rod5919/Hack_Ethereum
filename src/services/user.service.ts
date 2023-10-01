import { User } from "../models/user.model";
import { GetUserDTO, DeleteUserDTO, UpdateUserDTO, CreateUserDTO, LoginUserDTO, AuthUserDTO } from "../dtos/user.dto";

import { hashPassword } from "../utils/auth/pass-hash";
import { comparePassword } from "../utils/auth/pass-hash";
import { config } from "../config";

import jwt from "jsonwebtoken";
import boom from "@hapi/boom";
export class UserService {
  constructor() {}

  async getUser(id : User["id"], id_number : User["id_number"]) : Promise<GetUserDTO | string> { 
    return "hola mundo";
  }

  async updateUser(
    id: number,
    user: UpdateUserDTO
  ): Promise<GetUserDTO | string> {
    return "hola mundo";
  }

  async deleteUser(id: User["id"]): Promise<DeleteUserDTO | string> {
    return "hola mundo";
  }

  async createUser(user: CreateUserDTO): Promise< GetUserDTO| string> {
    return "hola mundo";
  }

  async loginUser(user: LoginUserDTO): Promise<AuthUserDTO | string> {
    return "hola mundo";
  }
}
