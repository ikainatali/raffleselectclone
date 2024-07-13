import React from "react";

type RowProps = {
  text: string | React.ReactElement;
  comingSoon?: boolean;
};
const TableRow = ({ text, comingSoon }: RowProps) => {
  return (
    <>
      {text}
      {comingSoon && (
        <span className="pl-1 italic text-[10px] text-[#ff0000]">
          coming soon
        </span>
      )}
    </>
  );
};

export default TableRow;
