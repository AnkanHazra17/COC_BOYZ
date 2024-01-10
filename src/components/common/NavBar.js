import React, { useState } from "react";
import { Link, matchPath, useLocation } from "react-router-dom";
import { navBarLinks } from "../../data/NavBarLinks";
import { MdKeyboardArrowDown } from "react-icons/md";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const subLinks = [
  {
    year: "2020",
    eventPath: "/event-2020",
    winnerParh: "/winner-2020",
  },
  {
    year: "2021",
    eventPath: "/event-2021",
    winnerParh: "/winner-2021",
  },
  {
    year: "2022",
    eventPath: "/event-2022",
    winnerParh: "/winner-2022",
  },
  {
    year: "2023",
    eventPath: "/event-2023",
    winnerParh: "/winner-2023",
  },
  {
    year: "2024",
    eventPath: "/event-2024",
    winnerParh: "/winner-2024",
  },
];

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  const location = useLocation();
  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };

  return (
    <div className="w-full fixed z-40 h-14 flex items-center justify-center border-b-[1px] border-richblack-700 bg-richblack-900">
      <div className=" w-11/12 max-w-maxContent mx-auto flex justify-between items-center">
        <Link
          to="/"
          className=" text-pink-400 text-[30px] font-bold font-inter tracking-wider"
        >
          COC BOYZ.
        </Link>

        <nav className="hidden lg:flex items-center justify-between gap-14">
          <ul className="flex gap-6 text-richblack-5">
            {navBarLinks.map((ele, i) => {
              return (
                <li key={i}>
                  {ele.title === "Events" || ele.title === "Winners" ? (
                    <div className="flex relative z-0 items-center gap-2 cursor-pointer group">
                      <p className="text-richblack-25 font-bold">{ele.title}</p>
                      <MdKeyboardArrowDown className="text-richblack-25 font-bold"></MdKeyboardArrowDown>
                      <div className="invisible opacity-0 text-richblack-800 absolute w-[100px] top-[107%] flex flex-col bg-richblack-5 rounded-md p-4 group-hover:opacity-100 group-hover:visible transition-all duration-200">
                        {subLinks.map((link, i) => {
                          return (
                            <Link
                              key={i}
                              to={
                                ele.title === "Events"
                                  ? link.eventPath
                                  : link.winnerParh
                              }
                              className="py-1 px-1 rounded-md hover:bg-richblack-50"
                            >
                              {link.year}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={ele.path}
                      className={`${
                        matchRoute(ele?.path)
                          ? " text-pink-300"
                          : " text-richblack-25 hover:text-richblack-200 transition-all duration-200"
                      } font-bold transition-all duration-200`}
                    >
                      {ele.title}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
          <button className="text-center text-[13px] px-6 py-3 rounded-md font-bold bg-richblack-800 text-white hover:scale-95 transition-all duration-200">
            Admin Login
          </button>
        </nav>

        {/* Mobile Nav  */}
        <div className="lg:hidden">
          <div onClick={() => setToggle(!toggle)}>
            {toggle ? (
              <IoClose className="w-[28px] h-[28px] cursor-pointer text-richblack-300"></IoClose>
            ) : (
              <HiMenuAlt3 className="w-[28px] cursor-pointer h-[28px] text-richblack-300"></HiMenuAlt3>
            )}
          </div>

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-20 rounded-md`}
          >
            <div className="flex flex-col gap-9">
              {navBarLinks.map((ele, i) => {
                return (
                  <div key={i}>
                    {ele.title === "Events" || ele.title === "Winners" ? (
                      <div className="flex relative z-0 items-center gap-2 cursor-pointer group">
                        <p className="text-richblack-25 font-bold">
                          {ele.title}
                        </p>
                        <MdKeyboardArrowDown className="text-richblack-25 font-bold"></MdKeyboardArrowDown>
                        <div className="invisible opacity-0 text-richblack-800 absolute w-[100px] top-[107%] -translate-x-28 flex flex-col bg-richblack-5 rounded-md p-4 group-hover:opacity-100 group-hover:visible transition-all duration-200">
                          {subLinks.map((link, i) => {
                            return (
                              <Link
                                key={i}
                                to={
                                  ele.title === "Events"
                                    ? link.eventPath
                                    : link.winnerParh
                                }
                                className="py-1 px-1 rounded-md hover:bg-richblack-50"
                              >
                                {link.year}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    ) : (
                      <Link
                        to={ele.path}
                        className={`${
                          matchRoute(ele?.path)
                            ? " text-pink-300"
                            : " text-richblack-25 hover:text-richblack-200 transition-all duration-200"
                        } font-bold transition-all duration-200`}
                      >
                        {ele.title}
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
