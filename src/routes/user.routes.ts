import express from "express";
import passport from "passport";

import { UserService } from "../services/user.service";
import { getTokenInfo } from "../utils/db/getTokenInfo";

import Boom from "@hapi/boom";

const router = express.Router();
const userService = new UserService();

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  async (req, res, next) => {
    try {
      const { id, id_number } = await getTokenInfo(req.headers.authorization as string);
      if (!id_number) throw Boom.unauthorized("Invalid token");      
      res.status(200).send(await userService.get(id));
    } catch (err) {
      next(err);
    }
  }
);

export default router;
