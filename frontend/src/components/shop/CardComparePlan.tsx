import {
  tr1,
  tr2,
  tr3,
  tr4,
  tr5,
  tr6,
  tr7,
  tr8,
  tr9,
  tr10,
  tr11,
  tr12,
  tr13,
  tr14,
} from "../../assets/data/comparePlanData";

import clsx from "clsx";

import TableRow from "./TableRow";

const CardComparePlan = () => {
  return (
    <>
      <div className="relative lg:overflow-x-auto overflow-x-scroll border-[1px] border-blackLight rounded-t-xl rounded-b-xl">
        <table className="border-collapse table-fixed w-full rounded-t-xl">
          <thead className="p-4 bg-[#FAD6EB]">
            <tr className="font-robotoFlex">
              <th className="lg:w-1/5 w-1/3 py-4">{""}</th>
              <th className="lg:w-1/5 w-1/3 py-4">Free</th>
              <th className="lg:w-1/5 w-1/3 py-4">Silver</th>
              <th className="lg:w-1/5 w-1/3 py-4">Gold</th>
              <th className="lg:w-1/5 w-1/3 py-4">Platinum</th>
            </tr>
          </thead>
          <tbody>
            <tr className="font-robotoFlex text-[13px]">
              {tr1.map((data, i) => (
                <td
                  key={i}
                  className="px-2 border-[1px] border-gray my-auto py-4"
                >
                  <TableRow text={data.text} />
                </td>
              ))}
            </tr>

            <tr className="font-robotoFlex text-[13px]">
              {tr2.map((data, i) => (
                <td
                  key={i}
                  className="px-2 border-[1px] border-gray my-auto py-4"
                >
                  <TableRow text={data.text} />
                </td>
              ))}
            </tr>

            <tr className="font-robotoFlex text-[13px]">
              {tr3.map((data, i) => (
                <td
                  key={i}
                  className="px-2 border-[1px] border-gray my-auto py-4"
                >
                  <TableRow text={data.text} />
                </td>
              ))}
            </tr>

            <tr className="font-robotoFlex text-[13px]">
              {tr4.map((data, i) => (
                <td
                  key={i}
                  className="px-2 border-[1px] border-gray my-auto py-4"
                >
                  <TableRow text={data.text} />
                </td>
              ))}
            </tr>

            <tr className="font-robotoFlex text-[13px]">
              {tr5.map((data, i) => (
                <td
                  key={i}
                  className="px-2 border-[1px] border-gray my-auto py-4"
                >
                  <TableRow text={data.text} />
                </td>
              ))}
            </tr>

            <tr className="font-robotoFlex text-[13px]">
              {tr6.map((data, i) => (
                <td
                  key={i}
                  className="px-2 border-[1px] border-gray my-auto py-4"
                >
                  <TableRow text={data.text} />
                </td>
              ))}
            </tr>

            <tr className="font-robotoFlex text-[13px]">
              {tr7.map((data, i) => (
                <td
                  key={i}
                  className="px-2 border-[1px] border-gray my-auto py-4"
                >
                  <TableRow text={data.text} />
                </td>
              ))}
            </tr>

            <tr className="font-robotoFlex text-[13px]">
              {tr8.map((data, i) => (
                <td
                  key={i}
                  className="px-2 border-[1px] border-gray my-auto py-4"
                >
                  <TableRow text={data.text} />
                </td>
              ))}
            </tr>

            <tr className="font-robotoFlex text-[13px]">
              {tr9.map((data, i) => (
                <td
                  key={i}
                  className="px-2 border-[1px] border-gray my-auto py-4"
                >
                  <TableRow text={data.text} />
                </td>
              ))}
            </tr>

            <tr className="font-robotoFlex text-[13px]">
              {tr10.map((data, i) => (
                <td
                  key={i}
                  className="px-2 border-[1px] border-gray my-auto py-4"
                >
                  <TableRow text={data.text} />
                </td>
              ))}
            </tr>
          </tbody>
        </table>

        <table className="border-collapse table-fixed lg:overflow-auto overflow-x-scroll w-full">
          <thead className="p-4 bg-[#FAD6EB]">
            <tr className="font-robotoFlex">
              <th className="w-1/5 py-4 text-left pl-2">Free</th>
              <th className="w-1/5 py-4">{""}</th>
              <th className="w-1/5 py-4">{""}</th>
              <th className="w-1/5 py-4">{""}</th>
              <th className="w-1/5 py-4">{""}</th>
            </tr>
          </thead>
          <tbody>
            <tr className="font-robotoFlex text-[13px]">
              {tr11.map((data, i) => (
                <td
                  key={i}
                  className="px-2 border-[1px] border-gray my-auto py-4"
                >
                  <TableRow text={data.text} />
                </td>
              ))}
            </tr>

            <tr className="font-robotoFlex text-[13px]">
              {tr12.map((data, i) => (
                <td
                  key={i}
                  className="px-2 border-[1px] border-gray my-auto py-4"
                >
                  <TableRow text={data.text} />
                </td>
              ))}
            </tr>
          </tbody>
        </table>

        <table className="border-collapse table-fixed lg:overflow-auto overflow-x-scroll w-full rounded-b-xl">
          <thead className="p-4 bg-[#FAD6EB]">
            <tr className="font-robotoFlex">
              <th className="w-1/5 py-4 text-left pl-2">Free</th>
              <th className="w-1/5 py-4">{""}</th>
              <th className="w-1/5 py-4">{""}</th>
              <th className="w-1/5 py-4">{""}</th>
              <th className="w-1/5 py-4">{""}</th>
            </tr>
          </thead>
          <tbody>
            <tr className="font-robotoFlex text-[13px]">
              {tr13.map((data, i) => (
                <td
                  key={i}
                  className="px-2 border-[1px] border-gray my-auto py-4"
                >
                  <TableRow text={data.text} />
                </td>
              ))}
            </tr>

            <tr className="font-robotoFlex text-[13px] rounded-b-xl">
              {tr14.map((data, i, row) => (
                <td
                  key={i}
                  className={clsx(
                    "px-2 border-[1px] border-gray my-auto py-4",
                    i === 0 && "rounded-bl-xl",
                    i + 1 === row.length && "rounded-br-xl"
                  )}
                >
                  <TableRow text={data.text} />
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CardComparePlan;
