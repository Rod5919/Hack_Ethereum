import express from "express";
import passport from "passport";

import validatorHandler from "../middlewares/validator.handler";
import { createUserSchema, loginUserSchema } from "../schemas/user.schema";
import { createHospitalSchema, loginHospitalSchema } from "../schemas/hospital.schema";

import { UserService } from "../services/user.service";
import { HospitalService } from "../services/hospital.service";

const router = express.Router();
const userService = new UserService();
const hospitalService = new HospitalService();

router.post(
  "/register/user",
  validatorHandler(createUserSchema, "body"),
  async (req, res, next) => {
    try {
      res.status(201).json(await userService.create(req.body));
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  "/register/hospital",
  validatorHandler(createHospitalSchema, "body"),
  async (req, res, next) => {
    try {
      res.status(201).json(await hospitalService.create(req.body));
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  "/login/user",
  validatorHandler(loginUserSchema, "body"),
  async (req, res, next) => {
    try {
      res.status(200).json(await userService.login(req.body));
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  "/login/hospital",
  validatorHandler(loginHospitalSchema, "body"),
  async (req, res, next) => {
    try {
      res.status(200).json(await hospitalService.login(req.body));
    } catch (error) {
      next(error);
    }
  }
);

export default router;
