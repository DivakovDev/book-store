import { FiShoppingCart } from "react-icons/fi";
import { useParams } from "react-router-dom";
import { useFetchBookByIdQuery } from "../../redux/features/books/booksApi";
import { getImgUrl } from "../../utils/getImgUrl";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cart/cartSlice";

export const SingleBook = () => {
  const { id } = useParams();
  const { data: book, isLoading, isError } = useFetchBookByIdQuery(id);

  const dispatch = useDispatch();

  // add selected product to card
  const handleAddToCart = (prod) => {
    dispatch(addToCart(prod));
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error happening to load book data</div>;
  return (
    <div className="max-w-lg p-5 shadow-md">
      <h1 className="mb-6 text-2xl font-bold">{book.title}</h1>

      <div className="">
        <div>
          <img
            src={`${getImgUrl(book.coverImage)}`}
            alt={book.title}
            className="mb-8"
          />
        </div>

        <div className="mb-5">
          <p className="mb-2 text-gray-700">
            <strong>Author:</strong> {book.author || "admin"}
          </p>
          <p className="mb-4 text-gray-700">
            <strong>Published:</strong>{" "}
            {new Date(book?.createdAt).toLocaleDateString()}
          </p>
          <p className="mb-4 text-gray-700 capitalize">
            <strong>Category:</strong> {book?.category}
          </p>
          <p className="text-gray-700">
            <strong>Description:</strong> {book.description}
          </p>
        </div>

        <button
          onClick={() => handleAddToCart(book)}
          className="flex items-center gap-1 px-6 py-2 space-x-1 text-base font-bold transition-all duration-200 rounded-md cursor-pointer bg-primary font-secondary hover:bg-secondary hover:text-white "
        >
          <FiShoppingCart className="" />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
};
