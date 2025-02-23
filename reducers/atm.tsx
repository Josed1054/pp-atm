export interface IATMData {
  view: ATM_VIEWS;
  userAuth: {
    id: string | null;
    name: string | null;
    cardProvider: string | null;
    isAuthenticated: boolean;
  };
  balance: IBalance;
  transactions: {
    amount: number;
    type: "deposit" | "withdraw";
    date: string;
  }[];
}

export type IBalance = {
  data: number | null;
  isLoading: boolean;
  isError: boolean;
};

export type IATMAction =
  | { type: ATM_ACTIONS.SET_VIEW; payload: IATMData["view"] }
  | { type: ATM_ACTIONS.SET_USER_AUTH; payload: IATMData["userAuth"] }
  | { type: ATM_ACTIONS.SET_BALANCE; payload: IBalance }
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
    id: null,
    name: null,
    cardProvider: null,
    isAuthenticated: false,
  },
  balance: {
    data: null,
    isLoading: false,
    isError: false,
  },
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
      if (state.balance.data === null) {
        return state;
      }

      return {
        ...state,
        balance: {
          ...state.balance,
          data: state.balance.data + action.payload,
        },
      };
    case ATM_ACTIONS.WITHDRAW:
      if (state.balance.data === null) {
        return state;
      }

      return {
        ...state,
        balance: {
          ...state.balance,
          data: state.balance.data - action.payload,
        },
      };
    default:
      return state;
  }
};
