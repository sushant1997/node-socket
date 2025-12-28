import { Router } from "express";
import { asyncHandler } from "../../handlers/asyncHandler.js";
import { auth } from "./auth.controller.js";

const router = Router();

router.post('/signup', asyncHandler(auth.register));
router.post('/login', asyncHandler(auth.login));

export default router;