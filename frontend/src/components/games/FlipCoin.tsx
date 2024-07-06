import { useState } from "react";
import Section from "../Section";

const FlipCoin = () => {
  const [val, setVal] = useState(-1);
  const flipCoin = () => {
    setVal(-1);
    setTimeout(() => {}, timeout);
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
            <h4 className="text-base font-poppins space-x-4">
              <span>
                Head: <span className="font-semibold">0</span>
              </span>
              <span>
                Tail: <span className="font-semibold">0</span>
              </span>
            </h4>
            <div className="coin-container">
              <div className="coins w-48 h-48 bg-blackLight rounded-full relative">
                <div className="coin-heads absolute w-full h-full flex justify-center items-center">
                  <div className="flex justify-center items-center w-40 h-40 bg-white/10 dotted-line border-2 border-dotted border-white rounded-full">
                    <span className="text-center text-2xl font-poppins font-semibold uppercase text-white">
                      Heads
                    </span>
                  </div>
                </div>
                <div className="coin-tails absolute w-full h-full flex justify-center items-center">
                  <div className="flex justify-center items-center w-40 h-40 bg-white/10 dotted-line border-2 border-dotted border-white rounded-full">
                    <span className="text-center text-2xl font-poppins font-semibold uppercase text-white">
                      Tails
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default FlipCoin;
