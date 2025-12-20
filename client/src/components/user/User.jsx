import React from "react";

const User = () => {
  return (
    <>
      <div className="flex gap-5 items-center px-3">
        <div className="avatar online">
          <div className="w-14 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
        <div className="">
          <h2 className="line-clamp-1">Full Name</h2>
          <p className="text-xs">username</p>
        </div>
      </div>
    </>
  );
};

export default User;
