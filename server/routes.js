import { Router } from "express";
import authRoutes  from './Chat/auth/routes.js'

const router = Router();

router.use(authRoutes)

export default router;