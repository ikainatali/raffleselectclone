import Section from "../components/Section";

const Home = () => {
  return (
    <>
      <Section>
        <div className="lg:[w-1240px] w-full">
          <h1 className="text-wide text-center font-freeman text-blackLight xl:text-[70px] lg:text-[60px] md:text-[50px] xs:text-[40px] text-[34px] xl:-mb-16 lg:-mb-14 md:-mb-10 sm:-mb-8 -mb-7 leading-tight tracking-wide">
            Start Creating Your <br />
            <span className="gradient">Giveaway</span> Today.
          </h1>
          <p className="text-center font-robotoFlex text-blackLight text-sm">
            Please make your selection from the available contests that you'd
            like to host.
          </p>
        </div>
      </Section>
    </>
  );
};

export default Home;
