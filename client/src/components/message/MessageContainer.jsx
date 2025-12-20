import React from "react";
import User from "../user/User";
import Message from "./Message";
import { MdSend } from "react-icons/md";

const MessageContainer = () => {
  return (
    <div className="w-full h-screen flex flex-col">
      <div className="p-3 border-b border-b-white/10">
        <User />
      </div>
      <div className="h-full overflow-y-auto p-3">
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
      </div>
      <div className="flex gap-1">
        <div className="w-full">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-primary w-full"
          />
        </div>
        <div>
          <button className="btn btn-square btn-primary">
            <MdSend />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessageContainer;
