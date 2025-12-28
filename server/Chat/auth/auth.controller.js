import { ErrorHandler } from "../../handlers/errorHandler.js";
import { jwtUtils } from "../../utils/jwt.js";
import User from "../user/user.model.js";
import { userLoginSchema, userSignupSchema } from "../user/user.validation.js";
import bcrypt from 'bcrypt'

export const auth = {
    register: async (req, res) => {
        const validation = await userSignupSchema.parseAsync(req.body);
        let { full_name, email, password, username, gender } = validation;
        password = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            email,
            username,
            full_name,
            password,
            gender
        });

        let token = await jwtUtils.initJwt({ id: newUser._id, email: newUser.email });

        res.status(200)
            .cookie("token", token, {
                maxAge: 7 * 24 * 60 * 60 * 1000,
                httpOnly: true,
                secure: process.env.NODE_ENV == 'production',
                sameSite: "None"
            })
            .json({
                newUser,
                token
            })
    },
    login: async (req, res) => {
        const validation = await userLoginSchema.parseAsync(req.body);
        let { email, password } = validation;

        const user = await User.findOne({ email }).select("+password");

        password = await bcrypt.compare(password, user.password);

        if (!password) {
            throw new ErrorHandler('Email or password incorrect.')
        }
        let token = await jwtUtils.initJwt({ id: user._id, email: user.email });

        res.status(200)
            .cookie("token", token, {
                maxAge: 7 * 24 * 60 * 60 * 1000,
                httpOnly: true,
                secure: process.env.NODE_ENV == 'production',
                sameSite: "None"
            })
            .json({
                token
            })
    }
}