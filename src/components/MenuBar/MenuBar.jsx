import React from "react";
import { GoArrowRight } from "react-icons/go";

const menuItems = [
  { title: "Stock Video", subItems: ["Stock Footage", "Motion Graphics"] },
  {
    title: "Video Templates",
    subItems: [
      "Stock Footage",
      "Stock Footage",
      "Stock Footage",
      "Motion Graphics",
    ],
  },
  { title: "Music", subItems: ["Stock Footage", "Motion Graphics"] },
  {
    title: "Sound Effects",
    subItems: [
      "Stock Footage",
      "Stock Footage",
      "Stock Footage",
      "Motion Graphics",
    ],
  },
  {
    title: "Graphic Templates",
    subItems: [
      "Stock Footage",
      "Stock Footage",
      "Stock Footage",
      "Stock Footage",
      "Stock Footage",
      "Motion Graphics",
    ],
  },
  {
    title: "Presentation Templates",
    subItems: ["Stock Footage", "Motion Graphics"],
  },
  {
    title: "Photos",
    subItems: [
      "Stock Footage",
      "Stock Footage",
      "Stock Footage",
      "Stock Footage",
      "Stock Footage",
      "Stock Footage",
      "Motion Graphics",
    ],
  },
  { title: "More", subItems: ["Stock Footage", "Motion Graphics"] },
];

const MenuBar = () => {
  return (
    <>
      <div className=" shadow">
        <div className="container mx-auto  ">
          <ul className="flex gap-4">
            {menuItems.map((menuItem, index) => (
              <li
                key={index}
                className="text-gray-500 group relative text-md py-4 border-b-transparent border-b-2 hover:border-b-blue-600 font-medium px-2"
              >
                {menuItem.title}
                <ul className="absolute z-50 rounded-b-md hidden group-hover:block top-[102%] left-0 border px-4 py-2 min-w-[200px] text-nowrap shadow  bg-white">
                  {menuItem.subItems.map((subItem, subIndex) => (
                    <li
                      key={subIndex}
                      className="text-md cursor-pointer rounded font-normal hover:bg-slate-200 px-2 py-2"
                    >
                      {subItem}
                    </li>
                  ))}
                  <li className="text-md cursor-pointer rounded font-medium hover:bg-slate-200 px-2 py-2 flex items-center gap-2">
                    All Stock Video <GoArrowRight />
                  </li>
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default MenuBar;
