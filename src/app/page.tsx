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
const current = 1;
const TOTAL_WEEKS = 22;
const GITHUB_LINK = "https://github.com/nestorxyz/unique-countdown";

export default function Home() {
  return (
    <main
      className={`${silk.variable} relative flex min-h-screen flex-col items-center justify-center font-silk text-white`}
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
      <footer className="absolute bottom-4 z-20">
        <div className="flex flex-col items-center justify-center gap-4 p-4">
          <div className="group relative flex gap-2 overflow-hidden rounded-full p-2 px-4 hover:bg-white/10">
            <a
              href={GITHUB_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="z-30 flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
              <div className="text-white">Github</div>
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
