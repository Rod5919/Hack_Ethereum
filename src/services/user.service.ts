import { User } from "../models/user.model";
import {
  GetUserDTO,
  CreateUserDTO,
  LoginUserDTO,
  AuthUserDTO,
} from "../dtos/user.dto";

import { hashPassword } from "../utils/auth/pass-hash";
import { comparePassword } from "../utils/auth/pass-hash";
import { config } from "../config";
import { v4 as uuidv4 } from "uuid";

import { read_from_ipfs, write_to_ipfs, DB } from "../db";
import jwt from "jsonwebtoken";
import boom from "@hapi/boom";
export class UserService {
  constructor() {}

  async get(
    id: User["id"]
  ): Promise<GetUserDTO | string> {
    const data = await read_from_ipfs(DB.USERS);
    if (!data) throw boom.notFound("No hay usuarios");
    const user = data.find((user: User) => user.id === id) as User;
    if (!user) throw boom.notFound("No existe el usuario");
    const { password, ...userData } = user;
    return userData;
  }

  async create(user: CreateUserDTO): Promise<GetUserDTO | string> {
    const new_user: User = {
      id: uuidv4(),
      ...user,
      password: await hashPassword(user.password),
    };
    write_to_ipfs(new_user, DB.USERS);
    return new_user;
  }

  async login(user: LoginUserDTO): Promise<AuthUserDTO | string> {
    const data = await read_from_ipfs(DB.USERS);
    if (!data) throw boom.notFound("No hay usuarios");
    const user_index = data.findIndex(
      (user: User) => user.id_number === user.id_number
    );
    if (user_index === -1) throw boom.notFound("No existe el usuario");
    const user_data = data[user_index];
    const password_match = await comparePassword(
      user.password,
      user_data.password
    );
    if (!password_match) throw boom.unauthorized("Contraseña incorrecta");
    const token = jwt.sign(
      { id: user_data.id, id_number: user_data.id_number },
      config.jwt_secret as string,
    );
    return { ...user_data, token };
  }
}
