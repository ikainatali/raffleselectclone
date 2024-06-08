import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const CommonPageSection = () => {
  return (
    <div className="flex flex-col min-h-full items-center pt-16 font-poppins">
      <h1 className="text-2xl font-semibold">Create your first Giveaway</h1>
      <p className="text-sm">
        Create giveaways for Youtube, Facebook, Tiktok, Lists and more
      </p>
      <Link to="/">
        <button className="btn-transition btn-arrow flex justify-center items-center gap-2 w-40 px-10 py-3 mt-6 rounded-full bg-blackLight text-white font-poppins text-sm font-medium">
          Continue
          <span className="arrow-hidden hidden transition ease-in-out">
            <FaArrowRightLong />
          </span>
        </button>
      </Link>
    </div>
  );
};

export default CommonPageSection;
