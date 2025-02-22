import { ReactNode } from "react";
export enum LINE_SIDE {
  LEFT = "left",
  RIGHT = "right",
}

interface IATMScreenProps {
  children: ReactNode;
}

export default function ATMScreen({ children }: Readonly<IATMScreenProps>) {
  return (
    <div className="bg-[#7EB4D5] border-4 grid grid-cols-2 grid-rows-6 gap-3 border-[#E1E1D6] row-start-2 w-full h-58">
      {children}
    </div>
  );
}
