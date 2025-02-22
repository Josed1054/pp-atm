export interface IATMData {
  view: ATM_VIEWS;
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

export enum ATM_ACTIONS {
  SET_USER_AUTH = "SET_USER_AUTH",
  SET_BALANCE = "SET_BALANCE",
  DEPOSIT = "DEPOSIT",
  WITHDRAW = "WITHDRAW",
  SET_VIEW = "SET_VIEW",
}

export enum ATM_VIEWS {
  WELCOME = "welcome",
  ENTER_PIN = "enter-pin",
  SELECTION_MENU = "selection-menu",
  VIEW_BALANCE = "view-balance",
  WITHDRAW = "withdraw",
  DEPOSIT = "deposit",
  SUCCESS = "success",
}

export const initialATMData: IATMData = {
  view: ATM_VIEWS.WELCOME,
  userAuth: {
    name: null,
    cardProvider: null,
    isAuthenticated: false,
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
