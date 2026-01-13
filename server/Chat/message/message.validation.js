import { z } from 'zod'
import User from '../user/user.model.js'
import mongoose from 'mongoose';


const userExistsRefine = async (id) => {
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return false;
    }

    const user = await User.exists({ _id: id });
    return !!user;
};

const zUserid = (label) => {
    return z.string()
        .nonempty(`${label} is required`)
        .refine(userExistsRefine, {
            message: 'User not found.'
        })
}

export const sendMessageSchema = z.object({
    senderId: zUserid('Sender'),
    receiverId: zUserid('Receiver'),
    message: z.string().nonempty('Message is required.')

})

export const getMessageSchema = z.object({
    myId: zUserid('My id'),
    otherParticipantId: zUserid('Other Participant Id')
})


