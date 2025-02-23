import { LINE_SIDE } from "./Screen";
import ScreenButtonText from "./ScreenButtonText";

const SELECTION_MENU_OPTIONS = [
  {
    label: "Withdraw",
    disabled: false,
    position: "col-start-1 row-start-5",
    lineSide: LINE_SIDE.LEFT,
  },
  {
    label: "Deposit",
    disabled: false,
    position: "col-start-1 row-start-6",
    lineSide: LINE_SIDE.LEFT,
  },
  {
    label: "Exit",
    disabled: false,
    position: "col-start-2 row-start-4",
    lineSide: LINE_SIDE.RIGHT,
  },
  {
    label: "Balance",
    disabled: false,
    position: "col-start-2 row-start-5",
    lineSide: LINE_SIDE.RIGHT,
  },
  {
    label: "Re-Enter PIN",
    disabled: false,
    position: "col-start-2 row-start-6",
    lineSide: LINE_SIDE.RIGHT,
  },
];

interface ISelectionMenuProps {
  name: string;
}

export default function SelectionMenu({ name }: Readonly<ISelectionMenuProps>) {
  return (
    <>
      <div className="col-span-2 row-span-2 flex flex-col items-center justify-center gap-1 p-4 w-full h-full">
        <p className="text-white text-sm">Hi {name}!</p>
        <p className="text-white text-xs">Please make a choice...</p>
      </div>
      <ScreenButtonText options={SELECTION_MENU_OPTIONS} />
    </>
  );
}
