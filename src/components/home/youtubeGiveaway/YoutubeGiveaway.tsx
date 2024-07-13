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
              <div className="static 2xl:-ml-0 xl:-ml-60 lg:-ml-0 md:-ml-40 -ml-48">
                <img
                  className="md:block hidden absolute 2xl:-left-[220px] xl:left-[0px] lg:left-[50px] md:left-[40px] xl:-top-[150px] lg:-top-[160px] md:-top-[160px] h-[620px] xl:w-[420px] lg:w-[400px] md:w-[450px] w-full"
                  src={halfcircle}
                  alt=""
                />
                <div>
                  <img
                    className="absolute md:-top-[101px] -top-[29px] h-[400px] w-[220px]"
                    src={youtubehome}
                    alt=""
                  />
                </div>
                <div className="static">
                  <img
                    className="round-text absolute 2xl:-left-[50px] xl:left-[120px] lg:left-[180px] md:left-[240px] xs:left-[114px] left-[60px] 2xl:bottom-[100px] md:bottom-[120px] bottom-[130px] md:h-[200px] h-[190px] md:w-[200px] w-[190px]"
                    src={circletext}
                    alt=""
                  />
                  <img
                    className="absolute 2xl:-left-[36px] xl:left-[134px] lg:left-[194px] md:left-[254px] xs:left-[126px] left-[74px] 2xl:bottom-[114px] md:bottom-[134px] bottom-[144px] md:h-[172px] md:w-[172px] h-[164px] w-[164px]"
                    src={circleoutline}
                    alt=""
                  />
                  <img
                    className="absolute 2xl:-left-[30px] xl:left-[140px] lg:left-[200px] md:left-[260px] xs:left-[132px] left-[80px] 2xl:bottom-[120px] md:bottom-[140px] bottom-[150px] md:h-[160px] md:w-[160px] h-[152px] w-[152px]"
                    src={circleblack}
                    alt=""
                  />
                  <img
                    className="absolute 2xl:left-[40px] xl:left-[210px] lg:left-[280px] md:left-[330px] xs:left-[200px] left-[150px] 2xl:bottom-[182px] md:bottom-[206px] bottom-[214px] h-7 w-6"
                    src={playicon}
                    alt=""
                  />
                  <img
                    className="md:block hidden absolute 2xl:-left-[132px] xl:left-[40px] lg:left-[100px] md:left-[160px] 2xl:bottom-[130px] md:bottom-[150px] h-[140px] w-[140px]"
                    src={circleblur}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 w-full lg:mt-12 -mt-16">
              <HeadingWide
                text1="YOUR COMMENT,"
                text2="OUR PICK"
                img3={
                  <span className="flex lg:mt-6 md:mt-4 mt-2">
                    <img
                      className="md:w-16 md:h-16 w-12 h-12"
                      src={blackwave}
                      alt=""
                    />
                    <img
                      className="md:w-16 md:h-16 w-12 h-12"
                      src={blackwave}
                      alt=""
                    />
                    <img
                      className="md:w-16 md:h-16 w-12 h-12"
                      src={blackwave}
                      alt=""
                    />
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
