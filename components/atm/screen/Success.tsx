import { LINE_SIDE } from "./Screen";
import ScreenButtonText from "./ScreenButtonText";

const SUCCESS_OPTIONS = [
  {
    label: "Menu",
    position: "col-start-2 row-start-6",
    lineSide: LINE_SIDE.RIGHT,
    disabled: false,
  },
];

export default function Success() {
  return (
    <>
      <div className="col-span-2 row-span-5 flex flex-col items-center justify-center gap-2">
        <p className="text-white text-center text-4xl">Success</p>
        <p className="text-white text-center text-sm">🐥</p>
      </div>
      <ScreenButtonText options={SUCCESS_OPTIONS} />
    </>
  );
}
