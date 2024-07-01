import clsx from "clsx";
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

type ButtonProps = {
  width: number;
  padding: number;
  children: ReactNode | string;
  bgColor: string;
  textSize: number;
};

const Button = ({
  width,
  padding,
  children,
  bgColor,
  textSize,
}: ButtonProps) => {
  return (
    <Link to="/">
      <button
        className={clsx(
          "btn-transition btn-arrow flex justify-center items-center gap-2 py-3 mt-6 rounded-full text-white font-poppins font-medium",
          `bg-[${bgColor}]`,
          `w-[${width}px]`,
          `px-${padding}`,
          `text-[${textSize}px]`
        )}
      >
        {children}
        <span className="arrow-hidden hidden transition ease-in-out">
          <FaArrowRightLong />
        </span>
      </button>
    </Link>
  );
};

export default Button;
