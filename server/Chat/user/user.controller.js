import User from "./user.model.js"

export const user = {
    all: async (req, res) => {
        const users = await User.find({
            _id: { $ne: req.user._id }
        })

        res.status(200).json({
            success: true,
            users
        })
    }
}