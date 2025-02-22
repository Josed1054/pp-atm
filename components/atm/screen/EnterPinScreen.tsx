import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

import { IATMSchemaType } from "@/lib/schemas/atm";
import { LINE_SIDE } from "./Screen";
import ScreenButtonText from "./ScreenButtonText";
import { UseFormReturn } from "react-hook-form";

const ENTER_PIN_OPTIONS = [
  {
    label: "Exit",
    disabled: false,
    position: "col-start-2 row-start-6",
    lineSide: LINE_SIDE.RIGHT,
  },
];

interface IEnterPinScreenProps {
  isUserAuthLoading: boolean;
  isUserAuthError: boolean;
  form: UseFormReturn<IATMSchemaType>;
}

export default function EnterPinScreen({
  isUserAuthLoading,
  isUserAuthError,
  form,
}: Readonly<IEnterPinScreenProps>) {
  return (
    <>
      <div className="col-span-2 row-span-5 flex flex-col items-center justify-start gap-2 p-4 pt-10 w-full h-full">
        <p className="text-white text-sm">Welcome to the ATM</p>
        <p className="text-white text-xs">Please enter your PIN</p>

        <InputOTP
          maxLength={4}
          value={form.watch("pin")?.toString() || ""}
          onChange={(value) => form.setValue("pin", Number(value))}
        >
          <InputOTPGroup>
            <InputOTPSlot
              index={0}
              className="bg-white text-black text-xs p-2 h-6"
            />
            <InputOTPSlot
              index={1}
              className="bg-white text-black text-xs p-2 h-6"
            />
            <InputOTPSlot
              index={2}
              className="bg-white text-black text-xs p-2 h-6"
            />
            <InputOTPSlot
              index={3}
              className="bg-white text-black text-xs p-2 h-6"
            />
          </InputOTPGroup>
        </InputOTP>
        {isUserAuthLoading && <p className="text-white text-sm">Loading...</p>}
        {isUserAuthError && <p className="text-red-700 text-sm">Invalid PIN</p>}
      </div>
      <ScreenButtonText options={ENTER_PIN_OPTIONS} />
    </>
  );
}
