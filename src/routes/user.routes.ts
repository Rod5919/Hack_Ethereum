import express from "express";
import passport from "passport";

import { UserService } from "../services/user.service";
import { getTokenInfo } from "../utils/db/getTokenInfo";

const router = express.Router();
const userService = new UserService();

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
    async (req, res, next) => {
      try {
        const { id_number } = await getTokenInfo(req.headers.authorization!) ?? req.body.id_number;
        res.status(200).send(await userService.get(id_number));
      } catch (err) {
        next(err);
      }
    }


  );

export default router;
