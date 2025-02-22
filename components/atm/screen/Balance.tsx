import { LINE_SIDE } from "./Screen";
import ScreenButtonText from "./ScreenButtonText";
import { formatNumber } from "@/lib/utils";

const BALANCE_OPTIONS = [
  {
    label: "Withdraw",
    position: "col-start-2 row-start-5",
    lineSide: LINE_SIDE.RIGHT,
    disabled: false,
  },
  {
    label: "Deposit",
    position: "col-start-1 row-start-6",
    lineSide: LINE_SIDE.LEFT,
    disabled: false,
  },
  {
    label: "Menu",
    position: "col-start-2 row-start-6",
    lineSide: LINE_SIDE.RIGHT,
    disabled: false,
  },
];

interface IBalanceProps {
  balance: number;
}

export default function Balance({ balance }: Readonly<IBalanceProps>) {
  return (
    <>
      <div className="col-span-2 row-span-2 flex flex-col items-center justify-center gap-1 p-4 w-full h-full">
        <p className="text-white text-sm">Current Balance</p>
        <p className="text-white text-xs">${formatNumber(balance)}</p>
      </div>
      <ScreenButtonText options={BALANCE_OPTIONS} />
    </>
  );
}
