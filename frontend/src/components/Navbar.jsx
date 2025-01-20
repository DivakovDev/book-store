import { Link } from "react-router-dom";
import { FaSwatchbook } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { HiOutlineUser, HiOutlineHeart, HiShoppingCart } from "react-icons/hi";
import avatarImage from "../assets/avatar.png";

export const Navbar = () => {
  const currentUser = true;
  return (
    <header className="px-4 py-6 mx-auto max-w-screen-2xl">
      <nav className="flex items-center justify-between">
        {/* Left SIde */}
        <div className="flex items-center gap-4 md:gap-16">
          <Link to="/">
            <FaSwatchbook className="w-6 h-6" />
          </Link>
          {/* search input */}
          <div className="relative w-40 space-x-2 sm:w-72">
            <IoSearchOutline className="absolute inline-block left-3 inset-y-2" />
            <input
              type="text"
              placeholder="Search here"
              className="bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none"
            />
          </div>
        </div>
        {/* Right Side */}
        <div className="relative flex items-center space-x-2 md:space-x-3">
          <div>
            {currentUser ? (
              <>
                <button>
                  <img
                    src={avatarImage}
                    alt="user profile picture"
                    className={`size-7 rounded-full ${
                      currentUser ? "ring-2 ring-blue-500" : ""
                    }`}
                  />
                </button>
              </>
            ) : (
              <Link to="/login">
                <HiOutlineUser className="size-6" />
              </Link>
            )}
          </div>{" "}
          <button className="hidden sm:block">
            <HiOutlineHeart className="size-6" />
          </button>
          <Link
            to="/cart"
            className="flex items-center p-1 px-2 rounded-md bg-primary sm:px-6"
          >
            <HiShoppingCart />
            <span className="text-sm font-semibold sm:ml-1">0</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};
