import { Input } from "@/components/ui/input";
import { NumericFormat } from "react-number-format";

interface IAmountInputProps {
  value: number;
  onChange: (value: number) => void;
}

export default function AmountInput({
  value,
  onChange,
}: Readonly<IAmountInputProps>) {
  return (
    <NumericFormat
      customInput={Input}
      className="w-16 h-5 !text-xs bg-white p-1 rounded-none border-0 shadow-none focus-visible:border-0 focus-visible:ring-0 focus-visible:shadow-none"
      thousandSeparator
      value={value}
      onValueChange={(eventValue) => onChange(Number(eventValue.floatValue))}
      decimalScale={2}
      step={1}
      prefix="$"
    />
  );
}
