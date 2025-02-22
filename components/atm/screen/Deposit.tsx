import DisplayBalance from "./DisplayBalance";
import { IATMSchemaType } from "@/lib/schemas/atm";
import { IBalance } from "@/reducers/atm";
import { Input } from "@/components/ui/input";
import { LINE_SIDE } from "./Screen";
import { Label } from "@/components/ui/label";
import ScreenButtonText from "./ScreenButtonText";
import { UseFormRegister } from "react-hook-form";

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

export const registerNumericField = (
  name: keyof IATMSchemaType,
  register: UseFormRegister<IATMSchemaType>
) => ({
  ...register(name, {
    setValueAs: (value: string) =>
      value === "" ? undefined : parseFloat(value),
  }),
  type: "number",
  step: "1",
  min: 1,
});

interface IDepositProps {
  balanceData: IBalance;
  register: UseFormRegister<IATMSchemaType>;
}

export default function Deposit({
  balanceData,
  register,
}: Readonly<IDepositProps>) {
  return (
    <>
      <div className="col-span-2 row-span-2 flex flex-col items-center justify-center gap-1 p-4 w-full h-full">
        <p className="text-white text-sm">Current Balance</p>
        <DisplayBalance balanceData={balanceData} />
        <div className="flex items-center justify-center gap-2">
          <Label className="text-white text-xs">Deposit Amount</Label>
          <Input
            className="w-1/4 h-5 !text-xs bg-white p-1 rounded-none border-0 shadow-none focus-visible:border-0 focus-visible:ring-0 focus-visible:shadow-none"
            {...registerNumericField("depositAmount", register)}
          />
        </div>
      </div>
      <ScreenButtonText options={DEPOSIT_OPTIONS} />
    </>
  );
}
