import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
  const [books, setBooks] = useState([]);
  console.log(books);

  useEffect(() => {
    fetch(`./data/booksData.json`)
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div className="my-8">
      <h1 className="text-center text-4xl font-bold text-black mb-8">Books</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* {books.map((book) => (
          <Book></Book>
        ))} */}
        {books.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Books;
