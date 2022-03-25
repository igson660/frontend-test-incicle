import * as allData from './data'
import { AppRoutes } from './shared/routes';

export const App = () => {
  console.log(allData.data.data, allData.management.data[0].boards);
  return (
    <AppRoutes />
  );
}
