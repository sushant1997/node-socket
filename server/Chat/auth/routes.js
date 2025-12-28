import { Router } from "express";
import { asyncHandler } from "../../handlers/asyncHandler.js";
import { auth } from "./auth.controller.js";
import { authMiddleware } from "../../middlewares/auth.middleware.js";

const router = Router();

router.post('/signup', asyncHandler(auth.register));
router.post('/login', asyncHandler(auth.login));

router.use(authMiddleware);
router.get('/me', asyncHandler(auth.me));
router.get('/logout', asyncHandler(auth.logout));

export default router;