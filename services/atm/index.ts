export interface IUserAuth {
  name: string | null;
  cardProvider: string | null;
  isAuthenticated: boolean;
}

export const validatePin = async (pin: number): Promise<IUserAuth> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (pin === 1234) {
        resolve({
          name: "Test User",
          cardProvider: "Visa",
          isAuthenticated: true,
        });
      }

      if (pin === 1054) {
        resolve({
          name: "Josed1054",
          cardProvider: "Mastercard",
          isAuthenticated: true,
        });
      }

      if (pin === 5001) {
        resolve({
          name: "gla5001",
          cardProvider: "star",
          isAuthenticated: true,
        });
      }

      // return a rejected promise
      reject(new Error("Invalid PIN"));
    }, 2000);
  });
};

export const getBalance = async (): Promise<number> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1000);
    }, 2000);
  });
};

export const simulateTransaction = async (amount: number): Promise<number> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(amount);
    }, 2000);
  });
};
