"use client";
import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { FaRegBookmark } from "react-icons/fa";
import { IoEllipsisHorizontalSharp } from "react-icons/io5";
import { FaRegPlayCircle } from "react-icons/fa";
const Header = () => {
  const [blur, setBlur] = useState(false);
  return (
    <>
      {blur && (
        <div onClick={()=>setBlur(false)} className=" w-full h-full fixed top-0 left-0 bg-black/50 backdrop-blur z-10"></div>
      )}
      <div className=" z-50 relative bg-white p-2 ">
        <div className="container  mx-auto justify-between flex items-center gap-2 ">
          <div className="flex items-center gap-2" onClick={()=>setBlur(false)}>
            <h1 className="text-3xl font-bold ">Similar</h1>{" "}
            <span className="text-white rounded-lg bg-black font-bold p-1 text-md">
              Watch
            </span>
          </div>
          <div className="w-2/5 group relative">
            <input
            onClick={()=>setBlur(true)}
              type="text"
              placeholder="Search for Movies, TV shows, Theme and Cast"
              className="border  border-slate-300 text-md p-2 rounded-full w-full  bg-[#F1F3F4] outline-none"
            />
            <div className="absolute top-[10px] right-[10px] border-l border-l-gray-300 pl-5">
              <IoIosSearch className="text-2xl   text-slate-600 pointer-events-none" />
            </div>
            <div className=" shadow p-2 hidden group-focus-within:block  z-40 absolute top-[106%] w-full bg-white  rounded-md">
              <h1 className="font-medium p-2">Trend</h1>
              <ul className="max-h-[60vh] overflow-y-scroll">
                <li className="p-2 text-sm hover:bg-slate-200">
                  Trending Reels
                </li>
                <li className="p-2 text-sm hover:bg-slate-200">
                  Trending Reels
                </li>
                <li className="p-2 text-sm hover:bg-slate-200">
                  Trending Reels
                </li>
                <li className="p-2 text-sm hover:bg-slate-200">
                  Trending Reels
                </li>
                <li className="p-2 text-sm hover:bg-slate-200">
                  Trending Reels
                </li>
              </ul>
            </div>
          </div>
          <div className="w-1/3 justify-end flex gap-4 items-center relative" onClick={()=>setBlur(false)}>
            <IoEllipsisHorizontalSharp className="text-4xl bg-[#F1F3F4] text-black p-2 rounded-full  cursor-pointer" />
            <FaRegPlayCircle className="text-4xl bg-[#F1F3F4] text-black p-2 rounded-full  cursor-pointer" />
            <button className="px-6 py-2 bg-green-500 rounded-lg font-semibold text-white  flex items-center gap-2">
              <FaRegBookmark className="font-semibold text-xl" />
             <span className="tracking-widest"> WishList</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
