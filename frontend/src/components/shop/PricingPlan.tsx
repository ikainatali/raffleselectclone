import { FaArrowRightLong } from "react-icons/fa6";

import CardPricingPlan from "./CardPricingPlan";

type PricingPlanProps = {
  card: object[];
};

const PricingPlan = ({ card }: PricingPlanProps) => {
  return (
    <>
      <div className="w-full flex flex-col gap-2 border-[1px] border-blackLight rounded-xl">
        <div className="flex justify-between p-3 bg-[#FAD6EB] rounded-t-xl">
          <h2 className="text-lg font-robotoFlex font-semibold">Free</h2>
          <h2 className="text-lg font-robotoFlex font-semibold">$00/month</h2>
        </div>
        <div className="flex flex-col p-3 space-y-3">
          <p className="text-sm font-robotoFlex font-semibold">
            Up to 00 Comments
          </p>
          <ul className="w-full space-y-3">
            {card.map((data, index) => (
              <div className="">
                <CardPricingPlan
                  key={index}
                  isIncluded={data.isIncluded}
                  text={data.text}
                  comingSoon={data.comingSoon}
                />
              </div>
            ))}
          </ul>
          <div className="mx-auto">
            <button className="btn-transition btn-arrow flex justify-center items-center gap-1 w-40 px-8 py-2 rounded-full bg-blackLight text-white font-poppins text-sm font-medium">
              Select Plan
              <span className="arrow-hidden hidden transition ease-in-out">
                <FaArrowRightLong />
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingPlan;
