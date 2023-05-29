import express from "express";
import { pet } from "./controllers/pet.controller.js";

const router = express.Router();

router.get("/pets", pet.get);

router.get("/pets/:param", pet.get_param);

router.post("/pets", pet.post);

router.put("/pets/:id", pet.put);

router.delete("/pets/:id", pet.delete);

export default router;