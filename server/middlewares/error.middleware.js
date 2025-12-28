import { ZodError } from "zod";

export const errorMiddleware = (error, req, res, next) => {
    error.message = error.message || "Something Went Wrong";
    error.status = error.status || 500;
    if (error instanceof ZodError) {
        const validationErrors = error.issues.map(err => ({
            path: err.path.join('.'),
            message: err.message
        }));

        return res.status(400).json({
            success: false,
            status: 400,
            errors: validationErrors
        });
    }
    res.status(error.status).json({
        success: false,
        satus: error.status,
        message: error.message
    })
}