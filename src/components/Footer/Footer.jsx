import React from "react";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="bg-[#F1F3F4] ">
        <div className="py-6 px-4 flex items-center gap-4 border-b border-b-gray-300">
          <h2 className="text-xl font-normal">Follow us</h2>
          <div className="flex items-center gap-2 text-xl">
            <FaYoutube className="hover:text-black text-slate-400 cursor-pointer" />
            <FaTwitter className="hover:text-black text-slate-400 cursor-pointer" />
            <FaFacebook className="hover:text-black text-slate-400 cursor-pointer" />
          </div>
        </div>
        <div className="w-full  flex py-4 px-4 border-b border-b-gray-300 ">
          <div className="w-1/5  p-2">
            <h3 className="my-2 font-semibold">Internal Link</h3>
            <ul>
              <li className="my-3 text-gray-500 cursor-pointer hover:text-gray-800">
                Documentation
              </li>
              <li className="my-3 text-gray-500 cursor-pointer hover:text-gray-800">
                Themes
              </li>
              <li className="my-3 text-gray-500 cursor-pointer hover:text-gray-800">
                Chrome Casts
              </li>
            </ul>
          </div>
          <div className="w-1/5  p-2">
            <h3 className="my-2 font-semibold">Interprise</h3>
            <ul>
              <li className="my-3 text-gray-500 cursor-pointer hover:text-gray-800">
                Download Chrome Browser
              </li>
              <li className="my-3 text-gray-500 cursor-pointer hover:text-gray-800">
                Chrome Browser for interprise
              </li>
              <li className="my-3 text-gray-500 cursor-pointer hover:text-gray-800">
                Chrome Browser Devices
              </li>
              <li className="my-3 text-gray-500 cursor-pointer hover:text-gray-800">
                Chrome OS
              </li>
              <li className="my-3 text-gray-500 cursor-pointer hover:text-gray-800">
                Google Clouds
              </li>
              <li className="my-3 text-gray-500 cursor-pointer hover:text-gray-800">
                Google Workspace
              </li>
            </ul>
          </div>
          <div className="w-1/5  p-2">
            <h3 className="my-2 font-semibold">Internal Link</h3>
            <ul>
              <li className="my-3 text-gray-500 cursor-pointer hover:text-gray-800">
                Documentation
              </li>
              <li className="my-3 text-gray-500 cursor-pointer hover:text-gray-800">
                Themes
              </li>
              <li className="my-3 text-gray-500 cursor-pointer hover:text-gray-800">
                Chrome Casts
              </li>
              <li className="my-3 text-gray-500 cursor-pointer hover:text-gray-800">
                Chrome Casts
              </li>
              <li className="my-3 text-gray-500 cursor-pointer hover:text-gray-800">
                Chrome Casts
              </li>
            </ul>
          </div>
          <div className="w-1/5  p-2">
            <h3 className="my-2 font-semibold">Interprise</h3>
            <ul>
              <li className="my-3 text-gray-500 cursor-pointer hover:text-gray-800">
                Download Chrome Browser
              </li>
              <li className="my-3 text-gray-500 cursor-pointer hover:text-gray-800">
                Chrome Browser for interprise
              </li>
              <li className="my-3 text-gray-500 cursor-pointer hover:text-gray-800">
                Chrome Browser Devices
              </li>
              <li className="my-3 text-gray-500 cursor-pointer hover:text-gray-800">
                Chrome OS
              </li>
              <li className="my-3 text-gray-500 cursor-pointer hover:text-gray-800">
                Google Clouds
              </li>
              <li className="my-3 text-gray-500 cursor-pointer hover:text-gray-800">
                Google Workspace
              </li>
            </ul>
          </div>
          <div className="w-1/5  p-2">
            <h3 className="my-2 font-semibold">Internal Link</h3>
            <ul>
              <li className="my-3 text-gray-500 cursor-pointer hover:text-gray-800">
                Documentation
              </li>
              <li className="my-3 text-gray-500 cursor-pointer hover:text-gray-800">
                Themes
              </li>
              <li className="my-3 text-gray-500 cursor-pointer hover:text-gray-800">
                Chrome Casts
              </li>
            </ul>
          </div>
        </div>
        <div className="p-4 flex justify-between">
          <div className="flex items-center gap-2 ">
            <h1 className="text-3xl font-bold ">Similar</h1>{" "}
            <span className="text-white rounded-lg bg-black font-bold p-1 text-md">
              Watch
            </span>
          </div>
          <div>
            <ul className="flex gap-4 items-center text-sm text-slate-600 ">
              <li className="hover:underline cursor-pointer">Privacy & Policy</li>
              <li className="hover:underline cursor-pointer">Terms & Condition</li>
              <li className="hover:underline cursor-pointer">Cookies & Policy</li>
              <li className="hover:underline cursor-pointer">About us</li>
              <li className="hover:underline cursor-pointer">Contact</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
