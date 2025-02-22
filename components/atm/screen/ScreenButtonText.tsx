import { LINE_SIDE } from "./Screen";
import { cn } from "@/lib/utils";

export interface IScreenButtonTextOption {
  label: string;
  disabled: boolean;
  position: string;
  lineSide: LINE_SIDE;
}

interface IScreenButtonTextProps {
  options: IScreenButtonTextOption[];
}

export default function ScreenButtonText({
  options,
}: Readonly<IScreenButtonTextProps>) {
  return (
    <>
      {options.map((option) => (
        <div
          key={option.label}
          className={cn(
            "col-span-1 flex items-center gap-1 row-span-1",
            option.position,
            option.disabled && "opacity-50",
            option.lineSide === "right" && "justify-end"
          )}
        >
          {option.lineSide === "left" && <div className="w-3 h-1 bg-white" />}
          <p className="text-white text-xs">{option.label}</p>
          {option.lineSide === "right" && <div className="w-3 h-1 bg-white" />}
        </div>
      ))}
    </>
  );
}
