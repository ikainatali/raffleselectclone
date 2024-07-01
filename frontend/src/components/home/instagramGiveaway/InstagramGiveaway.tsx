import Section from "../../Section";
import pause from "../../../assets/images/pause.png";
import whitewave from "../../../assets/images/white-wave-second.gif";
import instahome from "../../../assets/images/Instagram-home.png";
import arrow from "../../../assets/images/arrow.png";
import fan from "../../../assets/images/fan.png";
import HeadingWide from "../../ui/HeadingWide";
import Button from "../../ui/Button";

const InstagramGiveaway = () => {
  return (
    <>
      <Section>
        <div className="xl:w-[1240px] w-full mx-auto">
          <div className="flex gap-4">
            <div className="flex items-end gap-16 w-1/2">
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
                className="h-full w-[355px] object-cover"
                src={instahome}
                alt=""
              />
            </div>
            <div className="w-1/2">
              <h4 className="uppercase font-semibold font-robotoFlex tracking-[0.5rem] text-sm text-blackLight">
                INSTAGRAM COMMENT PICKER
              </h4>
              <HeadingWide
                text1="OUR CHOICE,"
                text2="YOUR WORDS"
                img1={
                  <img
                    className="round-flower mt-4 w-12 h-12 object-cover"
                    src={fan}
                    alt=""
                  />
                }
                img2={
                  <img className="mt-4 w-16 h-11 mr-4" src={arrow} alt="" />
                }
              ></HeadingWide>
              <p className="font-robotoFlex text-sm text-blackLight pt-6 pb-2">
                So, why wait? Join us in this journey where comments become
                stars and where every voice has its chance to shine and claim
                victory.
              </p>
              <Button bgColor="#DD2A7B" width={100} padding={4} textSize={18}>
                Connect With Instagram
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default InstagramGiveaway;
