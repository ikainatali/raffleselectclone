import Section from "../components/Section";
import { useState } from "react";
import pricingPlanData from "../assets/data/pricingPlanData";
import PricingPlan from "../components/shop/PricingPlan";

const Shop = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    console.log(isChecked);
  };
  return (
    <>
      <Section>
        <div className="xl:w-[1240px] w-full mx-auto py-4 text-blackLight font-robotoFlex">
          <div className="space-y-1">
            <h2 className="text-[1.7rem] font-bold text-center">
              🤑 Plans & Pricing
            </h2>
            <p className="text-[12px] text-center">
              Pick the plan that’s right for you
            </p>
            <div className="flex justify-center pt-2">
              <label className="relative inline-flex cursor-pointer items-center">
                <input
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
            <div className="w-full flex gap-4" key={index}>
              <PricingPlan card={data.card1} />
              <PricingPlan card={data.card2} />
              <PricingPlan card={data.card3} />
              <PricingPlan card={data.card4} />
            </div>
          ))}
        </div>
      </Section>
    </>
  );
};

export default Shop;
