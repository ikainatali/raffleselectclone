import Section from "../../Section";
import pause from "../../../assets/images/pause.png";
import whitewave from "../../../assets/images/white-wave-second.gif";
import instahome from "../../../assets/images/Instagram-home.png";
import arrow from "../../../assets/images/arrow.png";
import fan from "../../../assets/images/fan.png";
import HeadingWide from "../../ui/HeadingWide";
import Button from "../../ui/Button";

import { FaSquareInstagram } from "react-icons/fa6";

const InstagramGiveaway = () => {
  return (
    <>
      <Section>
        <div className="xl:w-[1240px] w-full mx-auto lg:pt-12 pt-4">
          <div className="flex lg:flex-row flex-col lg:gap-10 gap-4">
            <div className="flex items-end md:gap-16 gap-2 lg:w-1/2 w-full">
              <div className="flex flex-col gap-2 items-center ">
                <div className="border-2 border-blackLight w-12 h-12 rounded-full"></div>
                <div className="flex flex-col items-center bg-[#DD2A7B] p-[6px] rounded-full pb-8">
                  <img className="w-10 h-10 mb-2" src={pause} alt="" />
                  <img className="rotate-90 w-10 h-10" src={whitewave} alt="" />
                  <img className="rotate-90 w-10 h-10" src={whitewave} alt="" />
                  <img className="rotate-90 w-10 h-10" src={whitewave} alt="" />
                  <img className="rotate-90 w-10 h-10" src={whitewave} alt="" />
                </div>
              </div>
              <img
                className="h-full xl:w-[355px] lg:w-[290px] md:w-[440px] xxs:w-[260px] w-[200px] object-cover"
                src={instahome}
                alt=""
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <h4 className="uppercase font-semibold font-robotoFlex tracking-[0.5rem] text-sm text-blackLight">
                INSTAGRAM COMMENT PICKER
              </h4>
              <HeadingWide
                text1="OUR CHOICE,"
                text2="YOUR WORDS"
                img1={
                  <img
                    className="round-flower lg:mt-4 mt-2 w-12 h-12 object-cover"
                    src={fan}
                    alt=""
                  />
                }
                img2={
                  <img
                    className="lg:mt-4 mt-3 lg:w-14 md:w-14 w-12 lg:h-11 md:h-9 h-8 md:mr-4 mr-2"
                    src={arrow}
                    alt=""
                  />
                }
              ></HeadingWide>
              <p className="font-robotoFlex text-sm text-blackLight pt-6 pb-2">
                So, why wait? Join us in this journey where comments become
                stars and where every voice has its chance to shine and claim
                victory.
              </p>
              <Button
                bgColor="#DD2A7B"
                width={80}
                padding={5}
                margin={4}
                textSize={18}
              >
                <FaSquareInstagram size={22} />
                Connect With Instagram
              </Button>
              <p className="font-robotoFlex text-sm text-blackLight pt-4 pb-2">
                🔗 Utilize this Instagram Giveaway picker to randomly choose
                comments from Instagram photos and videos.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default InstagramGiveaway;
