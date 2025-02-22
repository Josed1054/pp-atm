import ScreenButtonText, { IScreenButtonTextOption } from "./ScreenButtonText";

interface ISelectionMenuProps {
  name: string;
  options: IScreenButtonTextOption[];
}
export default function SelectionMenu({
  name,
  options,
}: Readonly<ISelectionMenuProps>) {
  return (
    <>
      <div className="col-span-2 row-span-2 flex flex-col items-center justify-center gap-1 p-4 w-full h-full">
        <p className="text-white text-sm">Hi {name}!</p>
        <p className="text-white text-xs">Please make a choice...</p>
      </div>
      <ScreenButtonText options={options} />
    </>
  );
}
