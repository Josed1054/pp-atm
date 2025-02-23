import { IBalance } from "@/reducers/atm";
import { formatNumber } from "@/lib/utils";

interface IDisplayBalanceProps {
  balanceData: IBalance;
}

export default function DisplayBalance({
  balanceData,
}: Readonly<IDisplayBalanceProps>) {
  if (balanceData.isLoading) {
    return <p className="text-white text-xs">$--.--</p>;
  }

  if (balanceData.isError) {
    return <p className="text-red-500 text-xs">Error</p>;
  }

  if (balanceData.data !== null) {
    return (
      <p className="text-white text-xs">${formatNumber(balanceData.data)}</p>
    );
  }

  return null;
}
