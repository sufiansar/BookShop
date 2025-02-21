import BannerLinks from "../../assets/books.jpg";

const Banner = () => {
  return (
    <div className="hero bg-[#1313130D] min-h-screen rounded-3xl ">
      <div className="hero-content flex-col lg:flex-row-reverse ">
        <img
          src={BannerLinks}
          className="max-w-sm rounded-lg shadow-2xl md:ml-32"
        />
        <div className="">
          <h1 className="text-5xl text-black font-bold">
            Books to freshen up <br />
            your bookshelf
          </h1>
          <button className="btn bg-green-500 mt-10 text-white">
            View The List
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
