import Section from "../../Section";
import youtubehome from "../../../assets/images/giveaway-image.png";
import halfcircle from "../../../assets/images/radius-circle.png";
import circleblur from "../../../assets/images/circle-transparent.png";
import playicon from "../../../assets/images/download.png";
import circleblack from "../../../assets/images/black-circle.png";
import circleoutline from "../../../assets/images/white-line.png";
import circletext from "../../../assets/images/round-text.png";
import blackwave from "../../../assets/images/black-transparent.gif";
import HeadingWide from "../../ui/HeadingWide";
import SearchForm from "../SearchForm";
const YoutubeGiveaway = () => {
  return (
    <>
      <Section>
        <div className="xl:w-[1240px] w-full mx-auto pt-2 pb-10">
          <div className="flex lg:flex-row flex-col xl:gap-4 lg:gap-14 gap-4">
            <div className="relative flex flex-col 2xl:items-start items-center lg:w-1/2 w-full pb-[480px]">
              <img
                className="absolute -left-[220px] -top-[150px] h-[620px] xl:w-[420px] lg:w-[400px] md:w-[600px] w-full"
                src={halfcircle}
                alt=""
              />
              <div>
                <img
                  className="absolute -top-[101px] h-[400px] w-[220px]"
                  src={youtubehome}
                  alt=""
                />
              </div>
              <div>
                <img
                  className="round-text absolute -left-[50px] bottom-[100px] h-[200px] w-[200px]"
                  src={circletext}
                  alt=""
                />
                <img
                  className="absolute -left-[36px] bottom-[114px] h-[172px] w-[172px]"
                  src={circleoutline}
                  alt=""
                />
                <img
                  className="absolute -left-[30px] bottom-[120px] h-[160px] w-[160px]"
                  src={circleblack}
                  alt=""
                />
                <img
                  className="absolute left-[40px] bottom-[182px] h-7 w-6"
                  src={playicon}
                  alt=""
                />
                <img
                  className="absolute -left-[132px] bottom-[130px] h-[140px] w-[140px]"
                  src={circleblur}
                  alt=""
                />
              </div>
            </div>
            <div className="lg:w-1/2 w-full lg:mt-12 mt-2">
              <HeadingWide
                text1="YOUR COMMENT,"
                text2="OUR PICK"
                img3={
                  <span className="flex mt-6">
                    <img className="w-16 h-16" src={blackwave} alt="" />
                    <img className="w-16 h-16" src={blackwave} alt="" />
                    <img className="w-16 h-16" src={blackwave} alt="" />
                  </span>
                }
              ></HeadingWide>

              <SearchForm placeholder="Enter a Tiktok Video URL" />
              <p className="font-robotoFlex text-sm text-blackLight pt-4 pb-2">
                🔗
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default YoutubeGiveaway;
