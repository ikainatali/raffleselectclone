import Section from "../components/Section";

const Shop = () => {
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
          </div>
        </div>
      </Section>
    </>
  );
};

export default Shop;
