export interface IATMData {
  view:
    | "welcome"
    | "enter-pin"
    | "selection-menu"
    | "view-balance"
    | "withdraw"
    | "deposit"
    | "success";
  userAuth: {
    name: string | null;
    cardProvider: string | null;
    isAuthenticated: boolean;
  };
  balance: number;
  transactions: {
    amount: number;
    type: "deposit" | "withdraw";
    date: string;
  }[];
}

export type IATMAction =
  | { type: ATM_ACTIONS.SET_VIEW; payload: IATMData["view"] }
  | { type: ATM_ACTIONS.SET_USER_AUTH; payload: IATMData["userAuth"] }
  | { type: ATM_ACTIONS.SET_BALANCE; payload: number }
  | { type: ATM_ACTIONS.DEPOSIT; payload: number }
  | { type: ATM_ACTIONS.WITHDRAW; payload: number };

enum ATM_ACTIONS {
  SET_USER_AUTH = "SET_USER_AUTH",
  SET_BALANCE = "SET_BALANCE",
  DEPOSIT = "DEPOSIT",
  WITHDRAW = "WITHDRAW",
  SET_VIEW = "SET_VIEW",
}

export const initialATMData: IATMData = {
  view: "success",
  userAuth: {
    name: "Josed1054",
    cardProvider: null,
    isAuthenticated: true,
  },
  balance: 1000,
  transactions: [],
};

export const atmReducer = (state: IATMData, action: IATMAction): IATMData => {
  switch (action.type) {
    case ATM_ACTIONS.SET_VIEW:
      return { ...state, view: action.payload };
    case ATM_ACTIONS.SET_USER_AUTH:
      return { ...state, userAuth: action.payload };
    case ATM_ACTIONS.SET_BALANCE:
      return { ...state, balance: action.payload };
    case ATM_ACTIONS.DEPOSIT:
      return { ...state, balance: state.balance + action.payload };
    case ATM_ACTIONS.WITHDRAW:
      return { ...state, balance: state.balance - action.payload };
    default:
      return state;
  }
};
