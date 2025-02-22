import Balance from "./Balance";
import Deposit from "./Deposit";
import EnterPinScreen from "./EnterPinScreen";
import { IATMData } from "@/reducers/atm";
import NotFound from "./404";
import { SCREEN_OPTIONS } from "@/app/page";
import SelectionMenu from "./SelectionMenu";
import Success from "./Success";
import Welcome from "./Welcome";
import Withdraw from "./Withdraw";

interface IViewManagerProps {
  atmData: IATMData;
}

export default function ViewManager({ atmData }: Readonly<IViewManagerProps>) {
  if (atmData.userAuth.isAuthenticated && atmData.userAuth.name) {
    if (atmData.view === "selection-menu") {
      return (
        <SelectionMenu name={atmData.userAuth.name} options={SCREEN_OPTIONS} />
      );
    }

    if (atmData.view === "withdraw") {
      return <Withdraw balance={atmData.balance} />;
    }

    if (atmData.view === "deposit") {
      return <Deposit balance={atmData.balance} />;
    }

    if (atmData.view === "view-balance") {
      return <Balance balance={atmData.balance} />;
    }

    if (atmData.view === "success") {
      return <Success />;
    }
  }

  if (atmData.view === "welcome") {
    return <Welcome />;
  }

  if (atmData.view === "enter-pin") {
    return <EnterPinScreen error={"Test error"} />;
  }

  return <NotFound />;
}
