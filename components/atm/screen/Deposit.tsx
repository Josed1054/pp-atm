import { IATMSchemaType } from "@/lib/schemas/atm";
import { LINE_SIDE } from "./Screen";
import ScreenButtonText from "./ScreenButtonText";
import { UseFormRegister } from "react-hook-form";
import { formatNumber } from "@/lib/utils";

const DEPOSIT_OPTIONS = [
  {
    label: "$100",
    position: "col-start-1 row-start-3",
    lineSide: LINE_SIDE.LEFT,
    disabled: false,
  },
  {
    label: "$200",
    position: "col-start-2 row-start-3",
    lineSide: LINE_SIDE.RIGHT,
    disabled: false,
  },
  {
    label: "$300",
    position: "col-start-1 row-start-4",
    lineSide: LINE_SIDE.LEFT,
    disabled: false,
  },
  {
    label: "$400",
    position: "col-start-2 row-start-4",
    lineSide: LINE_SIDE.RIGHT,
    disabled: false,
  },
  {
    label: "$500",
    position: "col-start-1 row-start-5",
    lineSide: LINE_SIDE.LEFT,
    disabled: false,
  },
  {
    label: "$1,000",
    position: "col-start-2 row-start-5",
    lineSide: LINE_SIDE.RIGHT,
    disabled: false,
  },
  {
    label: "Custom",
    position: "col-start-1 row-start-6",
    lineSide: LINE_SIDE.LEFT,
    disabled: false,
  },
  {
    label: "Cancel",
    position: "col-start-2 row-start-6",
    lineSide: LINE_SIDE.RIGHT,
    disabled: false,
  },
];

interface IDepositProps {
  balance: number;
  register: UseFormRegister<IATMSchemaType>;
}

export default function Deposit({
  balance,
  register,
}: Readonly<IDepositProps>) {
  return (
    <>
      <div className="col-span-2 row-span-2 flex flex-col items-center justify-center gap-1 p-4 w-full h-full">
        <p className="text-white text-sm">Current Balance</p>
        <p className="text-white text-xs">${formatNumber(balance)}</p>
      </div>
      <ScreenButtonText options={DEPOSIT_OPTIONS} />
    </>
  );
}
