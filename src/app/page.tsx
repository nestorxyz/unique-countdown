/* eslint-disable @next/next/no-img-element */
"use client";
import { Black_Ops_One } from "next/font/google";
import dayjs from "dayjs";
import Countdown from "react-countdown";

const silk = Black_Ops_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-silk",
});

const END_DATE = new Date(2024, 4, 19, 0, 0, 0, 0);
const GOAL = 3000;
const current = 0;
const TOTAL_WEEKS = 22;

export default function Home() {
  return (
    <main
      className={`${silk.variable} font-silk relative flex min-h-screen flex-col items-center justify-center text-white`}
    >
      <img
        src="/bg.png"
        alt="bg"
        className="absolute h-full w-full object-cover"
      />
      <div className="absolute h-full w-full bg-gradient-to-b from-[#2e026d] to-[#15162c] object-cover opacity-50" />
      <div className="container z-20 flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-center text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          <span className="text-[hsl(280,100%,70%)]">{current}</span>/{GOAL}{" "}
          <span className="text-6xl">
            {Math.floor((current / GOAL) * 100)}%
          </span>
        </h1>
        <div className="grid grid-cols-1 gap-4">
          <div className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20">
            <div className="flex flex-col items-center gap-2 text-lg">
              <Countdown
                date={END_DATE}
                renderer={(props) => (
                  <span className="text-2xl font-medium text-[hsl(280,100%,70%)] md:text-3xl">
                    Week{" "}
                    {TOTAL_WEEKS -
                      (props.days / 7 > 1
                        ? Math.floor(props.days / 7)
                        : 1)}{" "}
                    (
                    {Math.floor(
                      ((TOTAL_WEEKS -
                        (props.days / 7 > 1 ? Math.floor(props.days / 7) : 1)) /
                        TOTAL_WEEKS) *
                        100,
                    )}
                    %)
                  </span>
                )}
              />
              <div className="flex flex-wrap justify-center gap-2 text-4xl md:gap-4 md:text-5xl">
                <Countdown
                  date={END_DATE}
                  renderer={(props) => <div>{props.days} days</div>}
                />
                <Countdown // end of today
                  date={dayjs().endOf("day").toDate()}
                  intervalDelay={0}
                  precision={1}
                  renderer={(props) => <div>{props.total}</div>}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
