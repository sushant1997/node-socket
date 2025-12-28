import { z } from 'zod';
import User from './user.model.js';

export const userSignupSchema = z.object({
    full_name: z.string().max(20, { message: 'Full name cannot be greater than 20 characters.' }).nonempty('Full name is required'),
    username: z.string().max(8, { message: 'Full name cannot be greater than 8 characters.' }).nonempty('Username is required'),
    email: z.email({ message: 'Invalid email!' }).refine(async (email) => {
        const exists = await User.findOne({ email });
        return !exists;
    }, {
        message: "Email already exists",
    }),
    password: z.string().min(8, { message: 'Password must be at least 8 characters' }).max(15, { message: 'Password cannot exceed 15 characters' }),
    confirmPassword: z.string(),
    gender: z.string().nonempty({ message: 'Gender cannot be null' }).refine(gender => {
        if (gender != '') {
            if (gender == 'M' || gender == 'F') {
                return true;
            }
            return false;
        }
        return true
    }, {
        message: "Invalid Input"
    })
}).refine(data => {
    return data.password === data.confirmPassword
}, {
    message: 'Passwords do not match',
    path: ["confirmPassword"]
});


export const userLoginSchema = z.object({
    email: z.email({ message: 'Invalid email!' }).refine(async (email) => {
        const exists = await User.findOne({ email });
        return exists;
    }, {
        message: "User Not Found!",
    }),
    password: z.string().min(8, { message: 'Password must be at least 8 characters' }).max(15, { message: 'Password cannot exceed 15 characters' }),

})