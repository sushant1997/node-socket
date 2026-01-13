import { Router } from "express";
import { authMiddleware } from "../../middlewares/auth.middleware.js";
import { message } from "./message.controller.js";
import { asyncHandler } from "../../handlers/asyncHandler.js";

const router = Router();

router.use(authMiddleware)
router.post('/send-message/:receiverId', asyncHandler(message.sendMessage));
router.get('/get-message/:otherParticipantId', asyncHandler(message.getMessage));

export default router;