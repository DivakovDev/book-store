import { FiShoppingCart } from "react-icons/fi";
import { getImgUrl } from "../../utils/getImgUrl";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cart/cartSlice";

export const BookCard = ({ book }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (prod) => {
    dispatch(addToCart(prod));
  };
  return (
    <div className="transition-shadow duration-300 rounded-lg">
      <div className="flex flex-row gap-4 sm:flex-row sm:items-center sm:h-72 sm:justify-center">
        <div className="w-full border rounded-md sm:w-auto sm:flex-shrink-0 h-50 sm:h-72">
          <Link to={`/books/${book._id}`}>
            <img
              src={`${getImgUrl(book.coverImage)}`}
              alt=""
              className="w-full p-2 transition-all duration-200 bg-cover rounded-md cursor-pointer hover:scale-105"
            />
          </Link>
        </div>

        <div className="flex flex-col items-start justify-center">
          <Link to={`/books/${book._id}`}>
            <h3 className="h-full mb-3 overflow-hidden text-sm font-semibold sm:text-xl hover:text-blue-600 line-clamp-2 text-ellipsis">
              {book.title}
            </h3>
          </Link>
          <p className="mb-5 text-xs text-gray-600 sm:text-sm">
            {book.description.length > 50
              ? `${book.description.slice(0, 50)}...`
              : book.description}
          </p>
          <p className="mb-5 text-xs font-medium sm:text-sm">
            ${book.newPrice}{" "}
            <span className="ml-2 font-normal line-through">
              ${book.oldPrice}
            </span>
          </p>
          <button
            onClick={() => handleAddToCart(book)}
            className="flex items-center gap-1 px-4 py-2 space-x-1 text-sm font-bold transition-all duration-200 rounded-md cursor-pointer sm:text-base bg-primary font-secondary hover:bg-secondary hover:text-white"
          >
            <FiShoppingCart className="" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};
