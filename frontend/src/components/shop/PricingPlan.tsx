import { FaArrowRightLong } from "react-icons/fa6";
import CardPricingPlan from "./CardPricingPlan";

type PricingPlanProps = {
  card: object[] | any;
  isMonthly?: boolean;
};

const PricingPlan = ({ card, isMonthly }: PricingPlanProps) => {
  return (
    <>
      <div className="md:w-1/2 lg:w-1/4 w-full border-[1px] border-blackLight rounded-xl">
        <div className="flex flex-col gap-2 ">
          <div className="flex justify-between p-3 bg-[#FAD6EB] rounded-t-xl">
            <h2 className="text-lg font-robotoFlex font-semibold">Free</h2>
            <h2 className="text-lg font-robotoFlex font-semibold">
              {isMonthly ? "$00/month" : "$00/year"}
            </h2>
          </div>
          <div className="flex flex-col p-3 space-y-3">
            <p className="text-sm font-robotoFlex font-semibold">
              Up to 00 Comments
            </p>
            <ul className="w-full space-y-3">
              {card.map((data: any, index: number) => (
                <CardPricingPlan
                  key={index}
                  isIncluded={data.isIncluded}
                  text={data.text}
                  comingSoon={data.comingSoon}
                />
              ))}
            </ul>
            <div className="mx-auto pt-3 pb-2">
              <button className="btn-transition btn-arrow flex justify-center items-center gap-1 w-32 px-4 py-2 rounded-full bg-blackLight text-white font-poppins text-sm font-medium">
                Select Plan
                <span className="arrow-hidden hidden transition ease-in-out">
                  <FaArrowRightLong />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingPlan;
