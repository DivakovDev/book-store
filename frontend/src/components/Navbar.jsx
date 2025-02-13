import { Link } from "react-router-dom";
import Logo from "../assets/logo-svg.svg";
import { IoSearchOutline } from "react-icons/io5";
import { HiOutlineUser, HiOutlineHeart, HiShoppingCart } from "react-icons/hi";
import avatarImage from "../assets/avatar.png";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useAuth } from "../../context/AuthContext";

const navigation = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Orders", href: "/orders" },
  { name: "Cart Page", href: "/cart" },
  { name: "Check Out", href: "/checkout" },
];

export const Navbar = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const { currentUser, logOut } = useAuth();

  const handleLogout = () => {
    logOut();
  };

  const cartItems = useSelector((state) => state.cart.cartItems);
  return (
    <header className="max-w-screen-xl px-4 py-6 mx-auto 2xl:max-w-screen-2xl">
      <nav className="flex items-center justify-between">
        {/* Left SIde */}
        <div className="flex items-center gap-4 md:gap-16">
          <Link to="/">
            <img src={Logo} className="w-8 h-8" />
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
          <div className="flex">
            {currentUser ? (
              <>
                <button onClick={() => setIsDropDownOpen(!isDropDownOpen)}>
                  <img
                    src={avatarImage}
                    alt="user profile picture"
                    className={`size-7 rounded-full ${
                      currentUser ? "ring-2 ring-blue-500" : ""
                    }`}
                  />
                </button>
                {/* dropdown menu */}
                {isDropDownOpen && (
                  <div className="absolute right-0 z-40 w-48 mt-2 bg-white rounded-md shadow-lg top-6">
                    <ul className="py-2">
                      {navigation.map((option) => (
                        <li
                          key={option.name}
                          onClick={() => setIsDropDownOpen(false)}
                        >
                          <Link
                            to={option.href}
                            className="block px-4 py-2 text-sm hover:bg-gray-100"
                          >
                            {option.name}
                          </Link>
                        </li>
                      ))}
                      <li>
                        <button
                          className="block w-full px-4 py-2 text-sm text-left hover:bg-gray-100"
                          onClick={handleLogout}
                        >
                          Logout
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </>
            ) : (
              <Link to="/login">
                <HiOutlineUser className="size-6" />
              </Link>
            )}
          </div>{" "}
          <button className="hidden sm:block ">
            <HiOutlineHeart className="duration-500 size-6 hover:text-red-600 hover:fill-red-600" />
          </button>
          <Link
            to="/cart"
            className="flex items-center p-1 px-2 transition duration-500 rounded-md hover:bg-second hover:text-white bg-primary sm:px-6"
          >
            <HiShoppingCart />
            {cartItems.length > 0 ? (
              <span className="text-sm font-semibold sm:ml-1">
                {cartItems.length}
              </span>
            ) : (
              <span className="text-sm font-semibold sm:ml-1">0</span>
            )}
          </Link>
        </div>
      </nav>
    </header>
  );
};
