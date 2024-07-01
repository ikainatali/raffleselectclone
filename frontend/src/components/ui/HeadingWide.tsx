type HeadingProps = {
  text1: string;
  text2: string;
  img1?: JSX.Element;
  img2?: JSX.Element;
  // children: ReactNode;
};

const HeadingWide = ({ text1, text2, img1, img2 }: HeadingProps) => {
  return (
    <>
      <div className="flex gap-2">
        <h1 className="text-wide font-freeman text-blackLight xl:text-[70px] lg:text-[60px] md:text-[50px] xs:text-[40px] text-[34px] uppercase font-black pt-5 xl:-mb-16 lg:-mb-14 md:-mb-10 sm:-mb-8 -mb-7 leading-tight tracking-wide">
          {text1}
        </h1>
        {img1}
      </div>
      {/* {children} */}
      <div className="flex gap-2">
        {img2}
        <h1 className="text-wide font-freeman text-blackLight xl:text-[70px] lg:text-[60px] md:text-[50px] xs:text-[40px] text-[34px] uppercase font-black pt-5 xl:-mb-16 lg:-mb-14 md:-mb-10 sm:-mb-8 -mb-7 leading-tight tracking-wide">
          {text2}
        </h1>
      </div>
    </>
  );
};

export default HeadingWide;
