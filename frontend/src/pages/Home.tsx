import { Link } from "react-router-dom";
import Section from "../components/Section";
import Card from "../components/home/Card";

//data
import cardData from "../assets/data/cardData";

const Home = () => {
  return (
    <>
      <Section>
        <div className="xl:w-[1240px] w-full mx-auto">
          <h1 className="text-wide text-center font-freeman text-blackLight xl:text-[70px] lg:text-[60px] md:text-[50px] xs:text-[40px] text-[34px] font-black pt-5 xl:-mb-16 lg:-mb-14 md:-mb-10 sm:-mb-8 -mb-7 leading-tight tracking-wide">
            Start Creating Your <br />
            <span className="gradient">Giveaway</span> Today.
          </h1>
          <p className="text-center font-robotoFlex text-blackLight text-sm">
            Please make your selection from the available contests that you'd
            like to host.
          </p>
          <div className="pt-10 pb-2 grid xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-3 grid-cols-1 gap-4">
            {cardData.map((data, index) => (
              <Link to="/">
                <Card
                  key={index}
                  icon={data.icon}
                  iconHover={data.iconHover}
                  title={data.title}
                  text={data.text}
                  comingSoon={data.comingSoon}
                  bgStyle={data.bgStye}
                />
              </Link>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
};

export default Home;
