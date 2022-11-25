import express, { Router }  from "express";
import { dividir, multiplicar, restar, sumar } from "../controllers/operaciones.controller.js";

const router= express.Router();

router.get("/sum", sumar);

router.get("/substraction", restar);

router.get("/multiplication", multiplicar);

router.get("/division", dividir);






export default router;