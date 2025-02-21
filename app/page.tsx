"use client";

import ATMButtons from "@/components/atm/Buttons";
import Image from "next/image";

const LEFT_BUTTONS = [
  {
    label: "1",
    onClick: () => {},
    disabled: false,
  },
  {
    label: "2",
    onClick: () => {},
    disabled: false,
  },
  {
    label: "3",
    onClick: () => {},
    disabled: false,
  },
  {
    label: "4",
    onClick: () => {},
    disabled: false,
  },
];

export default function Home() {
  return (
    <div
      aria-label="background"
      className="bg-[#A07FAC] h-screen w-screen flex justify-center"
    >
      <div
        aria-label="atm"
        className="h-full flex flex-col items-center justify-end"
      >
        <div className="flex items-center justify-center px-16 py-4 rounded-md bg-[#136CAE] box-shadow-lg relative">
          <Image
            src="/img/atm/atm_sign.png"
            alt="ATM"
            width={250}
            height={200}
          />
          <Image
            className="absolute top-1/4 right-1/12"
            src="/img/atm/graffiti.png"
            alt="graffiti"
            width={175}
            height={175}
          />
        </div>
        <div className="bg-gray-300 w-11/12 h-2" />
        <div className="bg-[#F1F0E7] w-11/12 md:h-2/3 h-4/5 relative">
          <div className="grid grid-cols-[auto_1fr_auto] w-full p-2 gap-0 gap-y-1">
            <Image
              className="w-full col-start-2 h-8"
              src="/img/atm/creditcard_sprite.png"
              alt="credit card sprite"
              width={150}
              height={10}
            />
            <ATMButtons direction="left" buttons={LEFT_BUTTONS} />
            <div
              aria-label="screen"
              className="bg-[#7EB4D5] border-4 border-[#E1E1D6] row-start-2 w-full h-54"
            />
            <ATMButtons direction="right" buttons={LEFT_BUTTONS} />
            <Image
              className="w-10 col-start-2 row-start-3 h-1.5 justify-self-end"
              src="/img/atm/systems.png"
              alt="systems"
              width={150}
              height={10}
            />
          </div>
          <Image
            className="w-36 col-start-2 h-auto absolute md:top-5/10 top-1/3 left-1/12"
            src="/img/atm/sticker_graf.png"
            alt="sticker graf"
            width={150}
            height={10}
          />
        </div>
      </div>
    </div>
  );
}
