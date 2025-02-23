import Balance from "./Balance";
import Deposit from "./Deposit";
import EnterPinScreen from "./EnterPinScreen";
import { IATMData } from "@/reducers/atm";
import { IATMSchemaType } from "@/lib/schemas/atm";
import NotFound from "./404";
import SelectionMenu from "./SelectionMenu";
import Success from "./Success";
import { UseFormReturn } from "react-hook-form";
import Welcome from "./Welcome";
import Withdraw from "./Withdraw";

interface IViewManagerProps {
  atmData: IATMData;
  form: UseFormReturn<IATMSchemaType>;
  isUserAuthLoading: boolean;
  isUserAuthError: boolean;
}

export default function ViewManager({
  atmData,
  form,
  isUserAuthLoading,
  isUserAuthError,
}: Readonly<IViewManagerProps>) {
  if (atmData.userAuth.isAuthenticated && atmData.userAuth.name) {
    if (atmData.view === "selection-menu") {
      return <SelectionMenu name={atmData.userAuth.name} />;
    }

    if (atmData.view === "withdraw") {
      return (
        <Withdraw
          balanceData={atmData.balance}
          value={form.watch("withdrawAmount")}
          setWithdrawAmount={(value) => form.setValue("withdrawAmount", value)}
        />
      );
    }

    if (atmData.view === "deposit") {
      return (
        <Deposit
          balanceData={atmData.balance}
          value={form.watch("depositAmount")}
          setDepositAmount={(value) => form.setValue("depositAmount", value)}
        />
      );
    }

    if (atmData.view === "view-balance") {
      return <Balance balanceData={atmData.balance} />;
    }

    if (atmData.view === "success") {
      return <Success />;
    }

    return <NotFound />;
  }

  if (atmData.view === "welcome") {
    return <Welcome />;
  }

  if (atmData.view === "enter-pin") {
    return (
      <EnterPinScreen
        isUserAuthLoading={isUserAuthLoading}
        isUserAuthError={isUserAuthError}
        form={form}
      />
    );
  }

  return <NotFound />;
}
