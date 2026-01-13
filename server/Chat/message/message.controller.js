import { string } from "zod";
import Conversation from "./conversation.model.js";
import Message from "./message.model.js";
import { getMessageSchema, sendMessageSchema } from "./message.validation.js";

export const message = {
    sendMessage: async (req, res) => {
        const data = { ...req.body, receiverId: req.params.receiverId, senderId: req.user._id.toString() };
        const validation = await sendMessageSchema.parseAsync(data);
        const { message, receiverId, senderId } = validation;

        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] }
        })

        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId]
            })
        }

        const newMessage = await Message.create({
            senderId,
            receiverId,
            message
        })
        if (newMessage) {
            conversation.messages.push(newMessage._id)
            await conversation.save()
        }

        res.status(200).json({
            success: true,
            newMessage,
        })
    },
    getMessage: async (req, res) => {
        const data = { otherParticipantId: req.params.otherParticipantId, myId: req.user._id.toString() };
        const validation = await getMessageSchema.parseAsync(data);
        const { otherParticipantId, myId } = validation;

        let conversation = await Conversation.findOne({
            participants: { $all: [myId, otherParticipantId] }
        }).populate("messages");

        //@TODO PAGINATION

        res.status(200).json({
            success: true,
            conversation,
        })

    }
}