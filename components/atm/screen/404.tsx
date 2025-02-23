import { LINE_SIDE } from "./Screen";
import ScreenButtonText from "./ScreenButtonText";

const NOT_FOUND_OPTIONS = [
  {
    label: "Menu",
    position: "col-start-2 row-start-6",
    lineSide: LINE_SIDE.RIGHT,
    disabled: false,
  },
];

export default function NotFound() {
  return (
    <>
      <div className="col-span-2 row-span-5 flex items-center justify-center">
        <p className="text-white text-center text-4xl">404</p>
      </div>
      <ScreenButtonText options={NOT_FOUND_OPTIONS} />
    </>
  );
}
