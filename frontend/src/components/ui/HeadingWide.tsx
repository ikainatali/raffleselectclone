type HeadingProps = {
  text1: string;
  text2: string;
  img1?: JSX.Element;
  img2?: JSX.Element;
  img3?: JSX.Element;
  // children: ReactNode;
};

const HeadingWide = ({ text1, text2, img1, img2, img3 }: HeadingProps) => {
  return (
    <>
      <div className="flex gap-2">
        <h1 className="text-wide font-freeman text-blackLight xl:text-[70px] lg:text-[60px] md:text-[54px] xs:text-[50px] xxs:text-[44px] text-[38px] uppercase font-black pt-5 xl:-mb-16 lg:-mb-14 md:-mb-10 sm:-mb-8 -mb-7 leading-tight tracking-wide">
          {text1}
        </h1>
        {img1}
      </div>
      {/* {children} */}
      <div className="flex gap-2 items-center">
        {img2}
        <h1 className="text-wide font-freeman text-blackLight xl:text-[70px] lg:text-[60px] md:text-[54px] xs:text-[50px] xxs:text-[44px] text-[38px] uppercase font-black pt-5 xl:-mb-16 lg:-mb-14 md:-mb-10 sm:-mb-8 -mb-7 leading-tight tracking-wide">
          {text2}
        </h1>
        {img3}
      </div>
    </>
  );
};

export default HeadingWide;
