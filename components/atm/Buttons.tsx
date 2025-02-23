"use client";

import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

export interface IButton {
  id: number;
  label: string;
  disabled?: boolean;
}

export interface IATMButtonsProps {
  direction: "left" | "right";
  buttons: IButton[];
  onButtonClick: (id: number) => void;
  isLoading?: boolean;
}

export default function ATMButtons({
  direction,
  buttons,
  onButtonClick,
  isLoading,
}: Readonly<IATMButtonsProps>) {
  return (
    <div
      className={cn(
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
            className="w-3/4 h-6 bg-[#C1C1C1] cursor-pointer rounded-sm border-y-2 border-b-[#9B9B9B] border-t-[#D9D9D4] hover:bg-slate-300"
            onClick={() => onButtonClick(button.id)}
            disabled={button.disabled || isLoading}
          />
          {direction === "left" && <div className="w-1/4 h-1 bg-[#C1C1C1]" />}
        </div>
      ))}
    </div>
  );
}
