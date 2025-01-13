"use client";

import { FaSearch, FaUser as UserIcon, } from "react-icons/fa";
import { useAppDispatch } from "@/app/lib/hooks";
import { toggleLoginModal, toggleRegisterModal, eventsSelector } from "@/app/lib/reducers/eventsSlice";

export default function Navigation() {
  const dispatch = useAppDispatch();

  const handleOpenLoginModal = () => {
    dispatch(toggleLoginModal());
  }

  const handleOpenRegisterModal = () => {
    dispatch(toggleRegisterModal());
  }

  return (
    <nav className="w-full h-[10%] flex flex-row justify-between items-center p-5">
      <div className="w-1/2 text-start h-full flex items-center">
        <h3 className="text-textDark font-thin"> Name of page</h3>
      </div>
      <div className="w-1/2 h-full flex flex-row justify-evenly items-center">
        <form action="" className="w-1/2 h-3/4 relative">
          <input
            type="text"
            placeholder="Search for AI's"
            className="searchbar-lg"
          />
          <button
            type="submit"
            className="absolute right-0 top-0 flex justify-center items-center w-1/6 h-full text-textDark"
          >
            <FaSearch />
          </button>
        </form>
        <div className="w-1/2 h-full flex flex-row items-center justify-evenly">
            <button className="btn-sm bg-accent" onClick={handleOpenLoginModal}>Login</button>
            <button className="btn-sm" onClick={handleOpenRegisterModal}>Sign Up</button>
        </div>
      </div>
    </nav>
  );
}
