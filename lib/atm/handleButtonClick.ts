import { ATM_ACTIONS, ATM_VIEWS, IATMAction } from "@/reducers/atm";

import { IATMSchemaType } from "../schemas/atm";
import { UseFormReturn } from "react-hook-form";
import { UseMutationResult } from "@tanstack/react-query";

const TRANSACTION_AMOUNTS = [100, 200, 300, 400, 500, 1000];

export function handleButtonClick(
  buttonId: number,
  view: ATM_VIEWS,
  setATMData: (action: IATMAction) => void,
  logOut: () => void,
  registerWithdrawMutation: UseMutationResult<number, Error, number>,
  registerDepositMutation: UseMutationResult<number, Error, number>,
  atmForm: UseFormReturn<IATMSchemaType>
) {
  if (view === ATM_VIEWS.WELCOME && buttonId === 8) {
    return setATMData({
      type: ATM_ACTIONS.SET_VIEW,
      payload: ATM_VIEWS.ENTER_PIN,
    });
  }

  if (view === ATM_VIEWS.ENTER_PIN && buttonId === 8) {
    return setATMData({
      type: ATM_ACTIONS.SET_VIEW,
      payload: ATM_VIEWS.WELCOME,
    });
  }

  if (view === ATM_VIEWS.SELECTION_MENU) {
    if (buttonId === 4) {
      logOut();

      return setATMData({
        type: ATM_ACTIONS.SET_VIEW,
        payload: ATM_VIEWS.WELCOME,
      });
    }

    if (buttonId === 5) {
      return setATMData({
        type: ATM_ACTIONS.SET_VIEW,
        payload: ATM_VIEWS.WITHDRAW,
      });
    }

    if (buttonId === 6) {
      return setATMData({
        type: ATM_ACTIONS.SET_VIEW,
        payload: ATM_VIEWS.VIEW_BALANCE,
      });
    }

    if (buttonId === 7) {
      return setATMData({
        type: ATM_ACTIONS.SET_VIEW,
        payload: ATM_VIEWS.DEPOSIT,
      });
    }

    if (buttonId === 8) {
      logOut();

      return setATMData({
        type: ATM_ACTIONS.SET_VIEW,
        payload: ATM_VIEWS.ENTER_PIN,
      });
    }
  }

  if (view === ATM_VIEWS.WITHDRAW) {
    if (buttonId === 8) {
      return setATMData({
        type: ATM_ACTIONS.SET_VIEW,
        payload: ATM_VIEWS.SELECTION_MENU,
      });
    }

    if (buttonId === 7) {
      return registerWithdrawMutation.mutate(
        atmForm.getValues("withdrawAmount")
      );
    }

    return registerWithdrawMutation.mutate(TRANSACTION_AMOUNTS[buttonId - 1]);
  }

  if (view === ATM_VIEWS.DEPOSIT) {
    if (buttonId === 8) {
      return setATMData({
        type: ATM_ACTIONS.SET_VIEW,
        payload: ATM_VIEWS.SELECTION_MENU,
      });
    }

    if (buttonId === 7) {
      return registerDepositMutation.mutate(atmForm.getValues("depositAmount"));
    }

    return registerDepositMutation.mutate(TRANSACTION_AMOUNTS[buttonId - 1]);
  }

  if (view === ATM_VIEWS.VIEW_BALANCE) {
    if (buttonId === 6) {
      return setATMData({
        type: ATM_ACTIONS.SET_VIEW,
        payload: ATM_VIEWS.WITHDRAW,
      });
    }

    if (buttonId === 7) {
      return setATMData({
        type: ATM_ACTIONS.SET_VIEW,
        payload: ATM_VIEWS.DEPOSIT,
      });
    }

    if (buttonId === 8) {
      return setATMData({
        type: ATM_ACTIONS.SET_VIEW,
        payload: ATM_VIEWS.SELECTION_MENU,
      });
    }
  }

  if (view === ATM_VIEWS.SUCCESS) {
    if (buttonId === 8) {
      return setATMData({
        type: ATM_ACTIONS.SET_VIEW,
        payload: ATM_VIEWS.SELECTION_MENU,
      });
    }
  }

  if (buttonId === 8) {
    logOut();

    return setATMData({
      type: ATM_ACTIONS.SET_VIEW,
      payload: ATM_VIEWS.WELCOME,
    });
  }
}
