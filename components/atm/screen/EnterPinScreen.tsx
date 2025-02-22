import { LINE_SIDE } from "./Screen";
import ReactCodeInput from "react-verification-code-input";
import ScreenButtonText from "./ScreenButtonText";

const ENTER_PIN_OPTIONS = [
  {
    label: "Exit",
    disabled: false,
    position: "col-start-2 row-start-6",
    lineSide: LINE_SIDE.RIGHT,
  },
];

interface IEnterPinScreenProps {
  error: string | null;
}

export default function EnterPinScreen({
  error,
}: Readonly<IEnterPinScreenProps>) {
  return (
    <>
      <div className="col-span-2 row-span-5 flex flex-col items-center justify-start gap-1 p-4 pt-10 w-full h-full">
        <p className="text-white text-sm">Welcome to the ATM</p>
        <p className="text-white text-xs">Please enter your PIN</p>
        <ReactCodeInput
          fields={4}
          className="!w-auto [&_input]:bg-white [&_input]:!text-black [&_input]:!text-xs [&_input]:!font-mono"
          fieldWidth={20}
          fieldHeight={16}
          onComplete={() => console.log("done")}
        />
        {error && <p className="text-red-700 text-sm">{error}</p>}
      </div>
      <ScreenButtonText options={ENTER_PIN_OPTIONS} />
    </>
  );
}
