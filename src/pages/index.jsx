import { Box } from '@mui/system';
import { Aside } from 'shared/components/aside';
import { Main } from 'shared/components/main';
import { lightTheme } from '../shared';
import { Header } from '../shared';


export const Home = () => {
  return(
    <Box
      width="100vw"
      height="100vh"
      bgcolor={ lightTheme.palette.background.default }
    >
      <Header />
      <Box
        width="100vw"
        height="91.8vh"
        display="flex"
      >
        <Main />
        <Aside />
      </Box>
    </Box>
  );
};
