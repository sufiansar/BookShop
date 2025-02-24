import { useLoaderData, useParams } from "react-router-dom";
import BookDetailsSingle from "../BookDetailsSingle/BookDetailsSingle";

const BookDetails = () => {
  const { bookId } = useParams();
  const data = useLoaderData();
  const id = parseInt(bookId);
  const book = data.find((book) => book.bookId === id);
  const {
    author,
    image,
    bookName,
    review,
    totalPages,
    tags,
    publisher,
    yearOfPublishing,
    category,
    rating,
  } = book;
  return (
    <div className="text-black my-8">
      <div className="flex ">
        <div className="w-[576px] h-[711px] bg-[#1313130D] ">
          <img className="[350px] mx-auto " src={image} alt="" />
        </div>
        <div className="ml-20">
          <h1 className="text-3xl font-bold ">{bookName}</h1>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
