import { Box } from '@mui/system';

import { Endormarketing } from './endormarketing';
import { Painting } from './painting';


export const Aside = ()  => {
  return(
    <Box
      width="30vw"
      height="91.8vh"
    >
      <Endormarketing />
      <Painting />
    </Box>
  );
};
