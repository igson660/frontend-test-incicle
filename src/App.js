import React, { useEffect } from 'react';
import * as allData from './data';
import { AppRoutes } from './routes';
import { useAppContext } from './shared';

export const App = () => {
  const {
    setMainData,
    mainData,
    setManagement,
    management,
  } = useAppContext();

  useEffect(() => {
    if(mainData.length < 1) setMainData(allData.data.data);
    if(management.length < 1)setManagement(allData.management.data[0].boards);
  }, [management, mainData]);

  return (
    <AppRoutes />
  );
};
