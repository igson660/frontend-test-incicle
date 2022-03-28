import { Box } from '@mui/system';
import { Aside } from 'shared/components/aside';
import { Main } from 'shared/components/main';
import { lightTheme } from '../shared';
import { Header } from '../shared';


export const Home = () => {
  return(
    <Box
      bgcolor={ lightTheme.palette.background.default }
      color="#707070"
    >
      <Header />
      <Box
        display="flex"
      >
        <Main />
        <Aside />
      </Box>
    </Box>
  );
};
