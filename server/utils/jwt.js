import jwt from 'jsonwebtoken';

export const jwtUtils = {
    initJwt : async (data) => {
        return jwt.sign(data, process.env.JWT_SECRET_KEY, { expiresIn: "7d" });
    }
} 