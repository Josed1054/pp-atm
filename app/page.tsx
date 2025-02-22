"use client";

import { ATMSchema, IATMSchemaType } from "@/lib/schemas/atm";
import {
  ATM_ACTIONS,
  ATM_VIEWS,
  atmReducer,
  initialATMData,
} from "@/reducers/atm";
import { simulateTransaction, validatePin } from "@/services/atm";
import { useEffect, useReducer } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";

import ATMButtons from "@/components/atm/Buttons";
import ATMScreen from "@/components/atm/screen/Screen";
import Image from "next/image";
import ViewManager from "@/components/atm/screen/ViewManager";
import { handleButtonClick } from "@/lib/atm/handleButtonClick";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const LEFT_BUTTONS = [
  {
    id: 1,
    label: "1",
  },
  {
    id: 3,
    label: "2",
  },
  {
    id: 5,
    label: "3",
  },
  {
    id: 7,
    label: "4",
  },
];

const RIGHT_BUTTONS = [
  {
    id: 2,
    label: "5",
  },
  {
    id: 4,
    label: "6",
  },
  {
    id: 6,
    label: "7",
  },
  {
    id: 8,
    label: "8",
  },
];

export default function Home() {
  const [atmData, setATMData] = useReducer(atmReducer, initialATMData);

  const atmForm = useForm<IATMSchemaType>({
    resolver: zodResolver(ATMSchema),
  });

  const pin = atmForm.watch("pin");

  const {
    data: userAuth,
    isLoading: isUserAuthLoading,
    isError: isUserAuthError,
  } = useQuery({
    queryKey: ["userAuth", pin],
    queryFn: () => validatePin(pin),
    enabled: !!pin && pin.toString().length === 4,
  });

  const registerWithdrawMutation = useMutation({
    mutationFn: (amount: number) => simulateTransaction(amount),
    onSuccess: (amount) => {
      setATMData({ type: ATM_ACTIONS.WITHDRAW, payload: amount });
      setATMData({ type: ATM_ACTIONS.SET_VIEW, payload: ATM_VIEWS.SUCCESS });
    },
  });

  const registerDepositMutation = useMutation({
    mutationFn: (amount: number) => simulateTransaction(amount),
    onSuccess: (amount) => {
      setATMData({ type: ATM_ACTIONS.DEPOSIT, payload: amount });
      setATMData({ type: ATM_ACTIONS.SET_VIEW, payload: ATM_VIEWS.SUCCESS });
    },
  });

  useEffect(() => {
    if (userAuth) {
      setATMData({ type: ATM_ACTIONS.SET_USER_AUTH, payload: userAuth });
      setATMData({
        type: ATM_ACTIONS.SET_VIEW,
        payload: ATM_VIEWS.SELECTION_MENU,
      });
      atmForm.reset();
    }
  }, [userAuth]);

  function logOut() {
    setATMData({
      type: ATM_ACTIONS.SET_USER_AUTH,
      payload: {
        name: null,
        cardProvider: null,
        isAuthenticated: false,
      },
    });
  }

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
            <Image
              className="w-full col-start-2 h-8"
              src="/img/atm/creditcard_sprite.png"
              alt="credit card sprite"
              width={150}
              height={10}
            />
            <ATMButtons
              direction="left"
              buttons={LEFT_BUTTONS}
              onButtonClick={(id) =>
                handleButtonClick(
                  id,
                  atmData.view,
                  setATMData,
                  logOut,
                  registerWithdrawMutation,
                  registerDepositMutation,
                  atmForm
                )
              }
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
              buttons={RIGHT_BUTTONS}
              onButtonClick={(id) =>
                handleButtonClick(
                  id,
                  atmData.view,
                  setATMData,
                  logOut,
                  registerWithdrawMutation,
                  registerDepositMutation,
                  atmForm
                )
              }
            />
          </div>
          <Image
            className="w-36 col-start-2 h-auto absolute md:top-5/10 top-1/3 left-1/12"
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
