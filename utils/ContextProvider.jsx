import { createContext, useContext, useState } from 'react';
import { USER_TOKENS_AMOUNT } from './data';

const MyContext = createContext();

export const useMyContext = () => useContext(MyContext);

 // eslint-disable-next-line
export const ContextProvider = ({ children }) => {
  const [userTokensAmount, setUserTokensAmount] = useState(+localStorage.getItem(USER_TOKENS_AMOUNT));

  const updateUserTokensAmount = (newData) => {
    setUserTokensAmount(newData);
  };

  return (
    <MyContext.Provider value={{ userTokensAmount, updateUserTokensAmount }}>
      {children}
    </MyContext.Provider>
  );
};