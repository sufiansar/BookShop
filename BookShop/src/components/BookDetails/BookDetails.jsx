import { useLoaderData, useParams } from "react-router-dom";
import BookDetailsSingle from "../BookDetailsSingle/BookDetailsSingle";
import { addData, addWishList } from "../Simple/Simple";

const BookDetails = () => {
  const { bookId } = useParams();
  const data = useLoaderData();
  const id = parseInt(bookId);
  const book = data.find((book) => book.bookId === id);
  const handleData = (id) => {
    addData(id);
  };
  const handleDataTwo = (id) => {
    addWishList(id);
  };

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
    <div className="text-black my-8 gap-4">
      <div className="md:flex ">
        <div className="md:w-1/2 h-[400px] md:h-[676px] bg-[#1313130D] rounded-3xl ">
          <figure className="">
            <img
              className="w-[250px]  h-[300px] md:w-[450px] md:h-[500px] m-10 md:m-22"
              src={image}
              alt=""
            />
          </figure>
        </div>
        <div className="ml-5 md:ml-20 md:w-1/2  ">
          <div className="border-b-2 border-dashed border-gray-300 ">
            <h1 className="text-3xl font-bold  mb-4">{bookName}</h1>
            <p className="mb-3"> By : {author}</p>
          </div>
          <div className="border-b-2 border-dashed border-gray-300 ">
            <h1 className="my-2">{category}</h1>
          </div>
          <div className="">
            <h1 className="my-4">
              <span className="text-black text-xl font-bold">Review :</span>
              {review}
              <div className="space-x-3 my-4 border-b-2 border-dashed border-gray-300 ">
                {tags.map((tag, index) => (
                  <button
                    key={index}
                    className="btn border-none shadow-none mb-4 btn-xs bg-[#23BE0A14] text-[#23BE0A]"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </h1>
          </div>

          <div className="space-y-4">
            <h1>Number Of Pages : {totalPages}</h1>
            <h3>Publisher : {publisher}</h3>
            <p>Year Of Publishing :{yearOfPublishing}</p>
            <h1>{rating}</h1>
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => handleData(bookId)}
              className="border-2 border-gray-600 px-4 py-2 rounded-xl btn btn-outline btn-accent"
            >
              Read
            </button>
            <button
              onClick={() => handleDataTwo(bookId)}
              className="bg-[50B1C9] btn btn-accent"
            >
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
