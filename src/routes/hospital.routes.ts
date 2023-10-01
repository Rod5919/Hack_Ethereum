import express from "express";
import passport from "passport";

import { validatorHandler } from "../middlewares/validator.handler";
import {
  getHospitalSchema,
  createHospitalSchema,
  deleteHospitalSchema,
} from "../schemas/hospital.schema";

import { HospitalService } from "../services/hospital.service";
import { getId } from "../utils/db/getId";

const router = express.Router();
const contactService = new HospitalService();

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  async (req, res, next) => {
    try {
      const caller = await getId(req.headers.authorization as string);
      res.status(200).send(await contactService.getHospitals(
        caller,
        req.query.limit ? parseInt(req.query.limit as string) : 10,
        req.query.offset ? parseInt(req.query.offset as string) : 0
      ));
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
      const caller = await getId(req.headers.authorization as string);
      res.status(201).send(await contactService.createHospital(
        caller,
        parseInt(req.params.id)
      ));
    } catch (err) {
      next(err);
    }
  }
);

router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  validatorHandler(deleteHospitalSchema, "params"),
  async (req, res, next) => {
    try {
      const caller = await getId(req.headers.authorization as string);
      res.status(200).send(await contactService.deleteHospital(
        caller,
        parseInt(req.params.id)
      ));
    } catch (err) {
      next(err);
    }
  }
);

export default router;