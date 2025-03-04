import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getstoredData, wishList } from "../Simple/Simple";
import BookDetails from "../BookDetails/BookDetails";
import Book from "../Book/Book";

const ListedBooks = () => {
  const allBooks = useLoaderData();
  const [wishListB, setWishlist] = useState([]);
  const [bookListS, setBookList] = useState([]);
  useEffect(() => {
    const storeReadlist = wishList();
    const storeAllString = storeReadlist.map((id) => parseInt(id));
    const bookList = allBooks.filter((book) =>
      storeAllString.includes(book.bookId)
    );
    setWishlist(bookList);
  }, []);

  useEffect(() => {
    const storeReadlist = getstoredData();
    const storeAllString = storeReadlist.map((id) => parseInt(id));
    const bookList = allBooks.filter((book) =>
      storeAllString.includes(book.bookId)
    );
    setBookList(bookList);
  }, []);
  return (
    <div className="text-black">
      <Tabs>
        <TabList>
          <Tab>ReadList</Tab>
          <Tab>WishList</Tab>
        </TabList>

        <TabPanel>
          <div className="grid grid-cols-3">
            {bookListS.map((book, index) => (
              <Book key={index} book={book}></Book>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-3">
            {wishListB.map((book, index) => (
              <Book key={index} book={book}></Book>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
