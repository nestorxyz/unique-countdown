"use client";
import dayjs from "dayjs";
import Countdown from "react-countdown";

const END_DATE = new Date(2024, 4, 19, 0, 0, 0, 0);
const GOAL = 3000;
const current = 0;
const TOTAL_WEEKS = 22;

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          <span className="text-[hsl(280,100%,70%)]">{current}</span>/{GOAL}{" "}
          <span className="text-6xl">
            {Math.floor((current / GOAL) * 100)}%
          </span>
        </h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
          <div className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20">
            <div className="flex flex-col items-center gap-2 text-lg">
              <Countdown
                date={END_DATE}
                renderer={(props) => (
                  <span className="text-2xl text-[hsl(280,100%,70%)]">
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
              <div className="flex flex-wrap justify-center gap-2 text-4xl">
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
