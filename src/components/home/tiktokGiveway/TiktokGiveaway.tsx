import Section from "../../Section";
import tiktokhome from "../../../assets/images/tktok-home.png";
import HeadingWide from "../../ui/HeadingWide";
import SearchForm from "../SearchForm";

const TiktokGiveaway = () => {
  return (
    <>
      <Section>
        <div className="xl:w-[1240px] w-full mx-auto pt-2 pb-6">
          <div className="flex lg:flex-row flex-col lg:gap-2 gap-4">
            <div className="flex justify-center items-start lg:w-1/2 w-full">
              <img
                className="h-full xl:w-[500px] lg:w-[400px] md:w-[600px] w-full object-cover object-top"
                src={tiktokhome}
                alt=""
              />
            </div>
            <div className="lg:w-1/2 w-full lg:mt-12 mt-2">
              <h4 className="uppercase font-semibold font-robotoFlex tracking-[0.5rem] text-sm text-blackLight">
                TIKTOK COMMENT PICKER
              </h4>
              <HeadingWide
                text1="YOUR INPUT,"
                text2="OUR CHOICE,"
                img1={
                  <span className="lg:text-[44px] md:text-[40px] text-[32px] -mb-2">
                    ✍
                  </span>
                }
                img2={
                  <span className="tiktok-loader lg:mt-5 md:mt-4 mt-3 md:mr-20 mr-16 md:-ml-0 -ml-2"></span>
                }
              ></HeadingWide>
              <p className="font-robotoFlex text-sm text-blackLight pt-10 pb-6">
                Why delay? Come join us on this voyage where comments transform
                into stars and where every voice has the opportunity to sparkle
                and seize triumph.
              </p>
              <SearchForm placeholder="Enter a Tiktok Video URL" />
              <p className="font-robotoFlex text-sm text-blackLight pt-4 pb-2">
                🔗 Utilize this Tiktok Giveaway picker to randomly choose
                comments from Tiktok videos.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default TiktokGiveaway;
