"use client";

import { Button } from "../ui/button";
import clsx from "clsx";

interface IATMButtonsProps {
  direction: "left" | "right";
  buttons: {
    label: string;
    onClick: () => void;
    disabled?: boolean;
  }[];
}

export default function ATMButtons({
  direction,
  buttons,
}: Readonly<IATMButtonsProps>) {
  return (
    <div
      className={clsx(
        "grid grid-rows-6 grid-cols-1 items-center gap-3 row-start-2 w-14 h-full border-y-4 border-transparent",
        direction === "right" && "col-start-3"
      )}
    >
      <div />
      <div />
      {buttons.map((button, index) => (
        <div key={`${button.label}-${index}`} className="flex items-center">
          {direction === "right" && <div className="w-1/4 h-1 bg-[#C1C1C1]" />}
          <Button
            className="w-3/4 h-6 bg-[#C1C1C1] rounded-sm border-y-2 border-b-[#9B9B9B] border-t-[#D9D9D4] hover:bg-slate-300"
            onClick={button.onClick}
            disabled={button.disabled}
          />
          {direction === "left" && <div className="w-1/4 h-1 bg-[#C1C1C1]" />}
        </div>
      ))}
    </div>
  );
}
