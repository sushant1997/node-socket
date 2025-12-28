import User from "../Chat/user/user.model.js";
import { asyncHandler } from "../handlers/asyncHandler.js";
import { ErrorHandler } from "../handlers/errorHandler.js";
import jwt from 'jsonwebtoken';

export const authMiddleware = asyncHandler(async (req, res, next) => {

    let token = req.cookies.token;
    if (!token) {
        throw new ErrorHandler('Session Expired', 401);
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    if (!decoded) {
        throw new ErrorHandler('Invalid token', 401);
    }
    const user = await User.findOne({_id:decoded.id, email:decoded.email});
    if (!user) {
        throw new ErrorHandler('User Not Found.', 401);
    }
    req.user = user;
    next();
});