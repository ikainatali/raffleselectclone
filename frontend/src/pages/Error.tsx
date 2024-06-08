import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const Error = () => {
  return (
    <div className="flex flex-col gap-5 h-screen items-center pt-20 font-poppins">
      <h1 className="text-2xl font-semibold">Error 404. Page not found.</h1>
      <Link to="/">
        <button className="btn-transition btn-arrow flex justify-center items-center gap-2 w-52 px-10 py-4 rounded-full bg-blackLight text-white font-poppins text-sm font-medium">
          Back to Home
          <span className="arrow-hidden hidden transition ease-in-out">
            <FaArrowRightLong />
          </span>
        </button>
      </Link>
    </div>
  );
};

export default Error;
