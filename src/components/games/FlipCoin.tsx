import { useState } from "react";
import Section from "../Section";
import clsx from "clsx";
import Button from "../ui/Button";

const FlipCoin = () => {
  const [active, setActive] = useState(0);
  const [countHeads, setCountHeads] = useState(0);
  const [countTails, setCountTails] = useState(0);
  let [val, setVal] = useState(-1);

  const flipCoin = () => {
    val = Math.random();
    setTimeout(() => {
      setVal(val);
    }, 100);
    setTimeout(() => {
      setActive(val);
      console.log(val);
      val >= 0.5
        ? setCountHeads(countHeads + 1)
        : setCountTails(countTails + 1);
    }, 2000);
  };

  return (
    <>
      <Section>
        <div className="xl:w-[1240px] w-full mx-auto">
          <div className="flex flex-col justify-center items-center gap-2 pt-4">
            <h2 className="text-4xl font-poppins font-semibold">
              Heads or Tails
            </h2>
            <p className="text-base font-poppins text-gray">
              Flip a coin online with this virtual coin flipper, it's easy and
              free.
            </p>
            <h4 className="text-base font-poppins space-x-4 pt-4">
              <span>
                Head: <span className="font-semibold">{countHeads}</span>
              </span>
              <span>
                Tail: <span className="font-semibold">{countTails}</span>
              </span>
            </h4>
            <div className="coin-container py-5">
              <div
                className={clsx(
                  "coins w-48 h-48 bg-blackLight rounded-full relative",
                  val > 0 ? (val >= 0.5 ? "heads" : "tails") : ""
                )}
              >
                <div className="coin-heads absolute w-full h-full flex justify-center items-center">
                  <div className="flex justify-center items-center w-40 h-40 bg-white/10 dotted-line border-2 border-dotted border-white rounded-full">
                    <span className="text-center text-2xl font-poppins font-semibold uppercase text-white">
                      {active > 0
                        ? active >= 0.5
                          ? "Heads"
                          : "Tails"
                        : "Heads"}
                      {/* {val > 0 ? (val >= 0.5 ? "heads" : "tails") : "Heads"} */}
                    </span>
                  </div>
                </div>
                <div className="coin-tails absolute w-full h-full flex justify-center items-center">
                  <div className="flex justify-center items-center w-40 h-40 bg-white/10 dotted-line border-2 border-dotted border-white rounded-full">
                    <span className="text-center text-2xl font-poppins font-semibold uppercase text-white">
                      {active > 0
                        ? active >= 0.5
                          ? "Heads"
                          : "Tails"
                        : "Tails"}
                      {/* {val > 0 ? (val >= 0.5 ? "heads" : "tails") : "Tails"} */}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div onClick={() => flipCoin()}>
              <Button link="#" textSize={14} margin={4} width={40}>
                Flip the coin!
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default FlipCoin;
