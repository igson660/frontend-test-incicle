import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [mainData, setMainData] = useState([]);
  const [management, setManagement] = useState([]);

  const globalState = {
    mainData,
    setMainData,
    management,
    setManagement
  };

  return (
    <AppContext.Provider
      value={ globalState }
    >
      {children}
    </AppContext.Provider>
  );
};

AppContextProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;
