import { BsArrowRight } from "react-icons/bs";
import { useState } from "react";

type CardProps = {
  icon: React.ReactElement;
  iconHover: React.ReactElement;
  title: string;
  text: string;
  comingSoon: boolean;
  bgStyle: string;
};

const Card = ({
  icon,
  iconHover,
  title,
  text,
  comingSoon,
  bgStyle,
}: CardProps) => {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <div className={bgStyle}>
      <div
        className="p-4 flex flex-col bg-white border-blackLight border-[1px] font-robotoFlex rounded-2xl justify-stretch h-full gap-5 hover:translate-x-2 hover:-translate-y-2 transition-all duration-[350ms] ease-out hover:ease-in"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className="h-9 transition-all ease-in-out">
          {isHovering ? iconHover : icon}
        </div>
        <div className="space-y-2 pb-3">
          <h2 className="text-lg text-blackDark font-semibold ">{title}</h2>
          <p className="text-blackLight text-[15px] font-robotoFlex leading-4">
            {text}
          </p>
          <h4 className="text-red text-sm">{comingSoon && "Coming soon"}</h4>
        </div>
        <div className="p-2 w-10 ml-auto mt-auto border-blackLight rounded-full border-[1px]">
          <BsArrowRight size={22} />
        </div>
      </div>
    </div>
  );
};

export default Card;
