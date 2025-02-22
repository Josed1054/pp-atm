import DisplayBalance from "./DisplayBalance";
import { IBalance } from "@/reducers/atm";
import { LINE_SIDE } from "./Screen";
import ScreenButtonText from "./ScreenButtonText";

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
  balanceData: IBalance;
}

export default function Balance({ balanceData }: Readonly<IBalanceProps>) {
  return (
    <>
      <div className="col-span-2 row-span-2 flex flex-col items-center justify-center gap-1 p-4 w-full h-full">
        <p className="text-white text-sm">Current Balance</p>
        <DisplayBalance balanceData={balanceData} />
      </div>
      <ScreenButtonText options={BALANCE_OPTIONS} />
    </>
  );
}
