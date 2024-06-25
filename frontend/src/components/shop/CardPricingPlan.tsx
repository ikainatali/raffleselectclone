import { FaCheck } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

type CardProps = {
  isIncluded: boolean;
  text: string;
  comingSoon: boolean;
};
const CardPricingPlan = ({ isIncluded, text, comingSoon }: CardProps) => {
  return (
    <>
      <li className="flex gap-3 items-center text-[12px] font-poppins">
        {isIncluded ? (
          <div className="text-[#5ED381]">
            <FaCheck size={15} />
          </div>
        ) : (
          <div className="text-[#F8573A]">
            <IoMdClose size={16} />
          </div>
        )}
        <p>
          {text}
          {comingSoon && (
            <span className="pl-1 italic text-[10px] text-[#ff0000]">
              coming soon
            </span>
          )}
        </p>
      </li>
    </>
  );
};

export default CardPricingPlan;
