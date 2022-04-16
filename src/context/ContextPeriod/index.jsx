import { createContext, useState } from 'react';
import P from 'prop-types';

export const PeriodContext = createContext();

export const PeriodContextProvider = ({ children }) => {
  const [period, setPeriod] = useState('monthly');

  return <PeriodContext.Provider value={{ period, setPeriod }}>{children}</PeriodContext.Provider>;
};

PeriodContextProvider.propTypes = {
  children: P.node.isRequired,
};
