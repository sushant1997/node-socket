import { IoMdSearch } from "react-icons/io";
import User from "./User";
import { MdLogout } from "react-icons/md";


const UserSidebar = () => {
  return (
    <div className="max-w-[20rem] w-full h-screen flex flex-col gap-2 border-r-[1px]">
      <div className=" mx-3 mt-3 text-2xl flex items-center justify-center text-[#7480FF]">
        <span>CHAT APP</span>
      </div>

      <div className="p-3">
        <label className="input input-bordered flex items-center gap-2">
          <input type="text" className="grow" placeholder="Search" />
          <IoMdSearch />
        </label>
      </div>

      <div className="overflow-auto flex flex-col gap-1 h-full">
        <User />
        <User />
        <User />
      </div>

      <div className="flex items-center justify-between p-3">
        <div className="avatar">
          <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
        <div>
          <button className="btn btn-sm btn-primary">
            <MdLogout />
            logout</button>
        </div>
      </div>
    </div>
  );
};

export default UserSidebar;
