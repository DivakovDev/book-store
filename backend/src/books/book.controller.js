const Book = require("./book.model");

// post book logic
const postABook = async (req, res) => {
  try {
    const newBook = await Book({ ...req.body });
    await newBook.save();
    res
      .status(200)
      .send({ message: "Book posted successfully!", book: newBook });
  } catch (error) {
    console.error("Error creating Book:", error);
    res.status(500).send({ message: "Failed to create Book!" });
  }
};

// get all books logic
const getAllBooks = async (req, res) => {
  try {
    // find and display books in descending order
    const books = await Book.find().sort({ createdAt: -1 });
    res.status(200).send(books);
  } catch (error) {
    console.error("Error fetching books:", error);
    res.status(500).send({ message: "Failed to fetch books!" });
  }
};

// get single book logic
const getSingleBook = async (req, res) => {
  try {
    // find single book by its id
    const { id } = req.params;
    const book = await Book.findById(id);
    if (!book) {
      res.status(404).send({ message: "Cannot find the book!" });
    }
    res.status(200).send(book);
  } catch (error) {
    console.error("Error fetching book:", error);
    res.status(500).send({ message: "Failed to fetch book!" });
  }
};

// update book logics
const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedBook = await Book.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedBook) {
      res.status(404).send({ message: "Error updating the book!" });
    }
    res.status(200).send({
      message: "Book updated successfully!",
      book: updatedBook,
    });
  } catch (error) {
    console.error("Error updating book:", error);
    res.status(500).send({ message: "Failed to update book!" });
  }
};

// delete book logics
const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteBook = await Book.findByIdAndDelete(id);
    if(!deleteBook){
        res.status(404).send({ message: "Error deleting the book!" });
    }
    res.status(200).send({
        message: "Book deleted successfully!",
        book: deleteBook,
      });
  } catch (error) {
    console.error("Error updating book:", error);
    res.status(500).send({ message: "Failed to update book!" });
  }
};

module.exports = {
  postABook,
  getAllBooks,
  getSingleBook,
  updateBook,
  deleteBook
};
