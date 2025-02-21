const Book = ({ book }) => {
  const { author, bookName, image } = book;

  return (
    <div className="card text-black border-2 border-gray-200 w-96 h-[482px] shadow-xl">
      <figure className="m-6">
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body mt-3">
        <h2 className="card-title">
          {bookName}
          <div className="badge badge-secondary">{}</div>
        </h2>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
};

export default Book;
