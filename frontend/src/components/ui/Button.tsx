import clsx from "clsx";
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

type ButtonProps = {
  width?: number;
  padding?: number;
  paddingY?: number;
  children: ReactNode | string;
  bgColor?: string;
  textSize: number;
  margin: number;
};

const Button = ({
  width,
  padding,
  paddingY,
  margin,
  children,
  bgColor,
  textSize,
}: ButtonProps) => {
  return (
    <Link to="/">
      <button
        className={clsx(
          "btn-transition btn-arrow flex justify-center items-center gap-2 rounded-full text-white font-poppins font-medium",
          bgColor ? `bg-[${bgColor}]` : "bg-blackLight",
          width ? `w-${width}` : "w-20",
          padding ? `px-${padding}` : "px-4",
          paddingY ? `py-${paddingY}` : "py-3",
          `mt-${margin}`,
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
