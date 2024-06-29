import Section from "../components/Section";
import { useState } from "react";
import pricingPlanData from "../assets/data/pricingPlanData";
import PricingPlan from "../components/shop/PricingPlan";

import { useToggleStore } from "../store";
import CardComparePlan from "../components/shop/CardComparePlan";

const Shop = () => {
  const isMonthly = useToggleStore((state) => state.isMonthly);

  const firstToggle = useToggleStore((state) => state.firstToggle);

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    console.log(isChecked);
  };
  return (
    <>
      <Section>
        <div className="xl:w-[1240px] w-full mx-auto py-4 text-blackLight font-robotoFlex">
          <div className="space-y-1 pb-10">
            <h2 className="text-[1.7rem] font-bold text-center">
              🤑 Plans & Pricing
            </h2>
            <p className="text-[12px] text-center">
              Pick the plan that’s right for you
            </p>
            <div className="flex justify-center pt-2">
              <label className="relative inline-flex cursor-pointer items-center">
                <input
                  onClick={firstToggle}
                  onChange={handleCheckboxChange}
                  id="switch"
                  type="checkbox"
                  className="peer sr-only"
                />
                <label htmlFor="switch" className="hidden"></label>
                <div className="peer h-3.5 w-10 rounded-full bg-gray after:absolute after:-top-[3px] after:left-0 after:h-5 after:w-5 after:rounded-full  after:bg-[#D81B60] after:transition-all after:content-[''] peer-checked:bg-[#E683B0] peer-checked:after:translate-x-full peer-hover:ring-4 peer-hover:ring-gray/20"></div>
              </label>
            </div>
          </div>
          {pricingPlanData.map((data, index) => (
            // console.log(data)
            <div className="flex md:flex-row flex-col gap-4" key={index}>
              <PricingPlan card={data.card1} isMonthly={isMonthly} />
              <PricingPlan card={data.card2} isMonthly={isMonthly} />
              <PricingPlan card={data.card3} isMonthly={isMonthly} />
              <PricingPlan card={data.card4} isMonthly={isMonthly} />
            </div>
          ))}

          <div className="py-6 text-blackLight font-robotoFlex">
            <div className="space-y-1 pb-6">
              <h2 className="text-[1.7rem] font-bold text-center">
                💸 Compare our plans side by side
              </h2>
              <p className="text-[12px] text-center">
                Effortlessly view plan options to make an informed decision
              </p>
            </div>
            <CardComparePlan />
          </div>
        </div>
      </Section>
    </>
  );
};

export default Shop;
