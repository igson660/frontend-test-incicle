import React, { useEffect } from 'react';
import * as allData from './data';
import { AppRoutes } from './routes';
import { useAppContext } from './shared';

export const App = () => {
  const { setMainData, setManagement } = useAppContext();

  useEffect(() => {
    setMainData(allData.data.data);
    setManagement(allData.management.data[0].boards);
  });

  return (
    <AppRoutes />
  );
};
