import { PropsWithChildren } from "react";

type SectionProps = PropsWithChildren;

const Section = ({ children }: SectionProps) => {
  return (
    <>
      <div className="w-full p-5">{children}</div>
    </>
  );
};

export default Section;
