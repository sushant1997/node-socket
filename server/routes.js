import { Router } from "express";
import authRoutes from './Chat/auth/routes.js'
import messageRoutes from './Chat/message/message.routes.js';
import userRoutes from './Chat/user/routes.js';

const router = Router();

router.use(authRoutes)
router.use(messageRoutes)
router.use(userRoutes)

export default router;