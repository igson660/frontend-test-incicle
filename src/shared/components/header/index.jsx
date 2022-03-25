import Box from '@mui/material/Box';
import { lightTheme } from '../../../shared';
import { Img } from './styleHeader';

export const Header = () => {
  return(
    <Box
      width="100vw"
      height="8.2vh"
      bgcolor={ lightTheme.palette.background.paper }
    >
      <Img />
    </Box>
  );
};
