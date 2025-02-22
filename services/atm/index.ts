export interface IUserAuth {
  id: string | null;
  name: string | null;
  cardProvider: string | null;
  isAuthenticated: boolean;
}

export const validatePin = async (pin: number): Promise<IUserAuth> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (pin === 1234) {
        resolve({
          id: "1234",
          name: "Test User",
          cardProvider: "Visa",
          isAuthenticated: true,
        });
      }

      if (pin === 1054) {
        resolve({
          id: "1054",
          name: "Josed1054",
          cardProvider: "Mastercard",
          isAuthenticated: true,
        });
      }

      if (pin === 5001) {
        resolve({
          id: "5001",
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

export const getBalance = async (id: string): Promise<number> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id === "1234") {
        resolve(1000);
      }

      if (id === "1054") {
        resolve(2000);
      }

      if (id === "5001") {
        resolve(3000);
      }

      reject(new Error("Invalid ID"));
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
