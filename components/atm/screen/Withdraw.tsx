import DisplayBalance from "./DisplayBalance";
import { IATMSchemaType } from "@/lib/schemas/atm";
import { IBalance } from "@/reducers/atm";
import { Input } from "@/components/ui/input";
import { LINE_SIDE } from "./Screen";
import { Label } from "@/components/ui/label";
import ScreenButtonText from "./ScreenButtonText";
import { UseFormRegister } from "react-hook-form";
import { registerNumericField } from "./Deposit";

const WITHDRAW_OPTIONS = [
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

interface IWithdrawProps {
  balanceData: IBalance;
  register: UseFormRegister<IATMSchemaType>;
  customAmount: number;
}

export default function Withdraw({
  balanceData,
  register,
  customAmount,
}: Readonly<IWithdrawProps>) {
  return (
    <>
      <div className="col-span-2 row-span-2 flex flex-col items-center justify-center gap-1 p-4 w-full h-full">
        <p className="text-white text-sm">Current Balance</p>

        <DisplayBalance balanceData={balanceData} />

        <div className="flex items-center justify-center gap-2">
          <Label className="text-white text-xs">Withdraw Amount</Label>
          <Input
            className="w-2/5 h-5 !text-xs bg-white p-1 rounded-none border-0 shadow-none focus-visible:border-0 focus-visible:ring-0 focus-visible:shadow-none"
            {...registerNumericField("withdrawAmount", register)}
          />
        </div>
        {customAmount > (balanceData.data ?? 0) && (
          <p className="text-red-500 text-[0.5rem]">
            You cannot withdraw more than your balance
          </p>
        )}
      </div>
      <ScreenButtonText options={WITHDRAW_OPTIONS} />
    </>
  );
}
