import { Box } from '@mui/system';
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

    </Box>
  );
};
