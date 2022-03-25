import { Button } from '@mui/material';
import { Box } from '@mui/system';
import { lightTheme } from '../shared';


export const Home = () => {
  return(
    <Box
      width="100vw"
      height="100vh"
      bgcolor={ lightTheme.palette.background.default }
    >
      <Button
        variant="contained"
        color="primary"
      >
        teste
      </Button>

    </Box>
  );
};
