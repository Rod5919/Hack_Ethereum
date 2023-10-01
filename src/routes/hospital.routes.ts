import express from "express";
import passport from "passport";

import { validatorHandler } from "../middlewares/validator.handler";
import {
  getHospitalSchema,
  createHospitalSchema,
} from "../schemas/hospital.schema";

import { HospitalService } from "../services/hospital.service";
import { getId } from "../utils/db/getId";

const router = express.Router();
const hospitalService = new HospitalService();

router.get(
  "/",
  validatorHandler(getHospitalSchema, "query"),
  passport.authenticate("jwt", { session: false }),
  async (req, res, next) => {
    try {
      const id = await getId(req.headers.authorization as string);
      res.status(200).send(await hospitalService.get(id));
    } catch (err) {
      next(err);
    }
  }
);

router.post(
  "/:id",
  validatorHandler(createHospitalSchema, "params"),
  passport.authenticate("jwt", { session: false }),
  async (req, res, next) => {
    try {
      res.status(201).send(await hospitalService.create(
        {
          name: req.body.name,
          username: req.body.username,
          password: req.body.password,
        }
      ));
    } catch (err) {
      next(err);
    }
  }
);


export default router;