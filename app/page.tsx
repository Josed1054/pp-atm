"use client";

import ATMButtons, { IButton } from "@/components/atm/Buttons";
import { ATMSchema, IATMSchemaType } from "@/lib/schemas/atm";
import {
  ATM_ACTIONS,
  ATM_VIEWS,
  atmReducer,
  initialATMData,
} from "@/reducers/atm";
import {
  TRANSACTION_AMOUNTS,
  handleButtonClick,
} from "@/lib/atm/handleButtonClick";
import { getBalance, simulateTransaction, validatePin } from "@/services/atm";
import { useEffect, useMemo, useReducer } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";

import ATMScreen from "@/components/atm/screen/Screen";
import CardType from "@/components/atm/screen/CardType";
import Image from "next/image";
import ViewManager from "@/components/atm/screen/ViewManager";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const LEFT_BUTTONS: IButton[] = [
  {
    id: 1,
    label: "1",
    disabled: false,
  },
  {
    id: 3,
    label: "2",
    disabled: false,
  },
  {
    id: 5,
    label: "3",
    disabled: false,
  },
  {
    id: 7,
    label: "4",
    disabled: false,
  },
];

const RIGHT_BUTTONS = [
  {
    id: 2,
    label: "5",
    disabled: false,
  },
  {
    id: 4,
    label: "6",
    disabled: false,
  },
  {
    id: 6,
    label: "7",
    disabled: false,
  },
  {
    id: 8,
    label: "8",
    disabled: false,
  },
];

export default function Home() {
  const [atmData, setATMData] = useReducer(atmReducer, initialATMData);

  const atmForm = useForm<IATMSchemaType>({
    resolver: zodResolver(ATMSchema),
    defaultValues: {
      withdrawAmount: 0,
      depositAmount: 0,
    },
  });

  const pin = atmForm.watch("pin");
  const withdrawAmount = atmForm.watch("withdrawAmount");

  const {
    data: userAuth,
    isLoading: isUserAuthLoading,
    isError: isUserAuthError,
  } = useQuery({
    queryKey: ["userAuth", pin],
    queryFn: () => validatePin(pin),
    enabled: !!pin && pin.toString().length === 4,
  });

  const {
    data: balanceData,
    isLoading: isBalanceLoading,
    isError: isBalanceError,
  } = useQuery({
    queryKey: ["balance", atmData.userAuth.id],
    queryFn: () => getBalance(atmData.userAuth.id ?? ""),
    enabled: !!atmData.userAuth.id,
  });

  const registerWithdrawMutation = useMutation({
    mutationFn: (amount: number) => simulateTransaction(amount),
    onSuccess: (amount) => {
      setATMData({ type: ATM_ACTIONS.WITHDRAW, payload: amount });
      setATMData({ type: ATM_ACTIONS.SET_VIEW, payload: ATM_VIEWS.SUCCESS });
      resetForm();
    },
  });

  const registerDepositMutation = useMutation({
    mutationFn: (amount: number) => simulateTransaction(amount),
    onSuccess: (amount) => {
      setATMData({ type: ATM_ACTIONS.DEPOSIT, payload: amount });
      setATMData({ type: ATM_ACTIONS.SET_VIEW, payload: ATM_VIEWS.SUCCESS });
      resetForm();
    },
  });

  useEffect(() => {
    if (userAuth) {
      setATMData({ type: ATM_ACTIONS.SET_USER_AUTH, payload: userAuth });
      setATMData({
        type: ATM_ACTIONS.SET_VIEW,
        payload: ATM_VIEWS.SELECTION_MENU,
      });
      resetForm();
    }
  }, [userAuth]);

  useEffect(() => {
    if (balanceData) {
      handleSetBalance(balanceData);
    }

    if (isBalanceLoading) {
      setATMData({
        type: ATM_ACTIONS.SET_BALANCE,
        payload: {
          data: null,
          isLoading: true,
          isError: false,
        },
      });
    }

    if (isBalanceError) {
      setATMData({
        type: ATM_ACTIONS.SET_BALANCE,
        payload: {
          data: null,
          isLoading: false,
          isError: true,
        },
      });
    }
  }, [balanceData, isBalanceLoading, isBalanceError]);

  const disabledLeftButtons = useMemo(() => {
    return LEFT_BUTTONS.map((button) => {
      if (atmData.view === ATM_VIEWS.WITHDRAW) {
        if (!atmData.balance.data) {
          return { ...button, disabled: true };
        }

        if (
          button.id === 7 &&
          (atmData.balance.data < withdrawAmount ||
            withdrawAmount < 1 ||
            !withdrawAmount)
        ) {
          return { ...button, disabled: true };
        }

        if (atmData.balance.data < TRANSACTION_AMOUNTS[button.id - 1]) {
          return { ...button, disabled: true };
        }

        return button;
      }

      return button;
    });
  }, [atmData.view, atmData.balance, withdrawAmount]);

  const disabledRightButtons = useMemo(() => {
    return RIGHT_BUTTONS.map((button) => {
      if (atmData.view === ATM_VIEWS.WITHDRAW) {
        if (!atmData.balance.data) {
          if (button.id !== 8) {
            return { ...button, disabled: true };
          }

          return button;
        }

        if (atmData.balance.data < TRANSACTION_AMOUNTS[button.id - 1]) {
          return { ...button, disabled: true };
        }

        return button;
      }

      return button;
    });
  }, [atmData.view, atmData.balance]);

  function resetForm() {
    atmForm.reset();
  }

  function logOut() {
    setATMData({
      type: ATM_ACTIONS.SET_USER_AUTH,
      payload: {
        id: null,
        name: null,
        cardProvider: null,
        isAuthenticated: false,
      },
    });
  }

  function handleSetBalance(balance: number) {
    setATMData({
      type: ATM_ACTIONS.SET_BALANCE,
      payload: {
        data: balance,
        isLoading: false,
        isError: false,
      },
    });
  }

  const isLoading =
    isUserAuthLoading ||
    registerWithdrawMutation.isPending ||
    registerDepositMutation.isPending;

  return (
    <div
      aria-label="background"
      className="bg-[#A07FAC] h-screen w-screen flex justify-center"
    >
      <div
        aria-label="atm"
        className="h-full flex flex-col items-center justify-end"
      >
        <div className="flex items-center justify-center px-16 py-4 rounded-md bg-[#136CAE] box-shadow-lg relative">
          <Image
            src="/img/atm/atm_sign.png"
            alt="ATM"
            width={250}
            height={200}
          />
          <Image
            className="absolute top-1/4 right-1/12"
            src="/img/atm/graffiti.png"
            alt="graffiti"
            width={175}
            height={175}
          />
        </div>
        <div className="bg-gray-300 w-11/12 max-w-11/12 h-2" />
        <div className="bg-[#F1F0E7] w-11/12 max-w-11/12 md:h-2/3 h-4/5 relative">
          <div className="grid grid-cols-[auto_1fr_auto] w-full p-2 gap-0 gap-y-1">
            <CardType cardProvider={atmData.userAuth.cardProvider} />
            <ATMButtons
              direction="left"
              buttons={disabledLeftButtons}
              onButtonClick={(id) =>
                handleButtonClick(
                  id,
                  atmData.view,
                  atmData.balance.data,
                  setATMData,
                  logOut,
                  registerWithdrawMutation,
                  registerDepositMutation,
                  atmForm
                )
              }
              isLoading={isLoading}
            />
            <ATMScreen>
              <ViewManager
                atmData={atmData}
                form={atmForm}
                isUserAuthLoading={isUserAuthLoading}
                isUserAuthError={isUserAuthError}
              />
            </ATMScreen>
            <ATMButtons
              direction="right"
              buttons={disabledRightButtons}
              onButtonClick={(id) =>
                handleButtonClick(
                  id,
                  atmData.view,
                  atmData.balance.data,
                  setATMData,
                  logOut,
                  registerWithdrawMutation,
                  registerDepositMutation,
                  atmForm
                )
              }
              isLoading={isLoading}
            />
            <Image
              className="w-10 col-start-2 row-start-3 h-1.5 justify-self-end"
              src="/img/atm/systems.png"
              alt="systems"
              width={150}
              height={10}
            />
          </div>

          <Image
            className="w-36 col-start-2 h-auto absolute md:top-9/16 top-1/3 left-1/12"
            src="/img/atm/sticker_graf.png"
            alt="sticker graf"
            width={150}
            height={10}
          />
        </div>
      </div>
    </div>
  );
}
