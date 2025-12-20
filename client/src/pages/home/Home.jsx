import React from "react";
import UserSidebar from "../../components/user/UserSidebar";
import MessageContainer from "../../components/message/MessageContainer";

const Home = () => {
  return (
    <>
      <div className="flex gap-2">
        <UserSidebar />
        <MessageContainer />
      </div>
    </>
  );
};

export default Home;
