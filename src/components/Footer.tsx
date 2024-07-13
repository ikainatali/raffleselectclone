import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="flex md:flex-row flex-col gap-1 lg:justify-around md:justify-between justify-start px-5 py-4 font-poppins text-[13px] text-blackLight">
        <p>© RaffleSelect LLC </p>
        <div className="flex md:flex-row flex-wrap md:gap-5 gap-1">
          <p>Contact Us support@raffleselect.com</p>
          <div className="flex md:justify-normal justify-between gap-5 grow">
            <Link className="text-indigo-600 underline" to="privacyPolicy">
              Terms and Condition
            </Link>
            <Link className="text-indigo-600 underline" to="privacyPolicy">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
