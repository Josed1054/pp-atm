import AmountInput from "./AmountInput";
import DisplayBalance from "./DisplayBalance";
import { IBalance } from "@/reducers/atm";
import { LINE_SIDE } from "./Screen";
import { Label } from "@/components/ui/label";
import ScreenButtonText from "./ScreenButtonText";

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
  value: number;
  setWithdrawAmount: (value: number) => void;
}

export default function Withdraw({
  balanceData,
  value,
  setWithdrawAmount,
}: Readonly<IWithdrawProps>) {
  return (
    <>
      <div className="col-span-2 row-span-2 flex flex-col items-center justify-center gap-1 p-4 w-full h-full">
        <p className="text-white text-sm">Current Balance</p>

        <DisplayBalance balanceData={balanceData} />

        <div className="flex items-center justify-center gap-2">
          <Label className="text-white text-xs">Withdraw Amount</Label>
          <AmountInput
            value={value}
            onChange={(value) => setWithdrawAmount(value)}
          />
        </div>
        {value > (balanceData.data ?? 0) && (
          <p className="text-red-500 text-[0.5rem]">
            You cannot withdraw more than your balance
          </p>
        )}
      </div>
      <ScreenButtonText options={WITHDRAW_OPTIONS} />
    </>
  );
}
