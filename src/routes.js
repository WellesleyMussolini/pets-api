import express from "express";
import { pet } from "./controllers/pet.controller.js";

const router = express.Router();

router.get("/", pet.get);

router.get("/:id", pet.get_by_id);

router.post("/", pet.post);

router.put("/:id", pet.put);

router.delete("/:id", pet.delete);

export default router;