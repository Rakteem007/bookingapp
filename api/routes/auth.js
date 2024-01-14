import express from "express";
import { login, logout, register } from "../controllers/auth.js";

const router = express.Router();

//sign-up
router.post("/register", register);
//sign-in
router.post("/login", login);
//logout
router.post("/logout", logout);

export default router;
