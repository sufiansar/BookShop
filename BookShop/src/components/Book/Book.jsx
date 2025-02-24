import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { bookId, author, bookName, image, tags, category, rating } = book;

  return (
    <Link to={`/books/${bookId}`}>
      <div className="mx-auto m-4">
        <div className="card text-black border-2 border-gray-200 md:w-96 md:h-[482px] shadow-xl">
          <figure className="bg-[#1313130D] m-6 rounded-2xl">
            <img
              className="h-[166px] w-[126px] mx-auto my-8"
              src={image}
              alt={bookName}
            />
          </figure>
          <div className="card-body mt-3">
            <div className="space-x-3">
              {tags.map((tag, index) => (
                <button
                  key={index}
                  className="btn border-none shadow-none btn-xs bg-[#23BE0A14] text-[#23BE0A]"
                >
                  {tag}
                </button>
              ))}
            </div>

            <h2 className="card-title">{bookName}</h2>

            <h2> By: {author}</h2>

            <div className="border-t-2 border-dashed border-gray-200">
              <div className="flex justify-between mt-4">
                <div>
                  <h1>{category}</h1>
                </div>
                <div className="flex gap-3">
                  <h1>{rating}</h1>
                  <div className="rating">
                    <input
                      type="radio"
                      name="rating-4"
                      className="mask mask-star-2 bg-orange-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
