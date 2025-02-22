import ScreenButtonText, { IScreenButtonTextOption } from "./ScreenButtonText";

import { LINE_SIDE } from "./Screen";

const WELCOME_OPTIONS: IScreenButtonTextOption[] = [
  {
    label: "Enter PIN",
    disabled: false,
    position: "col-start-2 row-start-6",
    lineSide: LINE_SIDE.RIGHT,
  },
];

export default function Welcome() {
  return (
    <>
      <div className="col-span-2 row-span-3 flex flex-col items-center justify-center">
        <p className="text-white text-center text-xl">Welcome to the</p>
        <p className="text-white text-center text-xl">ATM</p>
      </div>
      <ScreenButtonText options={WELCOME_OPTIONS} />
    </>
  );
}
