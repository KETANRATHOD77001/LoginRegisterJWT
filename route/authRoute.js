import express from "express";
import { registerController, loginController, protectedController } from "../controller/authController.js";

const router = express.Router();

//REGISTER 
router.post("/register", registerController);

//LOGIN 
router.post("/login", loginController);

router.get("/protected", protectedController);

export default router;