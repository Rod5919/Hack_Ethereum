import Boom from "@hapi/boom";
import jwt from "jsonwebtoken";
import { JwtPayload } from "jsonwebtoken";

import { User } from "../../models/user.model";
import { Hospital } from "../../models/hospital.model";

import { config } from "../../config";

const getTokenInfo = async (token: string) : Promise<{id: User["id"] | Hospital["id"], id_number: User["id_number"] | undefined}> => {
    const payload: JwtPayload = jwt.verify(token?.split(" ")[1] as string, config.jwt_secret as string) as JwtPayload;
    if (!payload) throw Boom.unauthorized("Invalid token");

    return {
        id: payload.id,
        id_number: payload.id_number,
    }
}

export { getTokenInfo };