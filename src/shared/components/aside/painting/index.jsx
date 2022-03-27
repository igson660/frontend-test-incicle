import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useAppContext } from '../../../hooks';
import { CardPainting } from './cardsPainting';


export const Painting =() => {
  const {
    management,
    setManagement
  } = useAppContext();

  return(
    <Box
      width="21.5vw"
      height="40vh"
      bgcolor="#FFFFFF"
    >
      <Typography
        variant="h6"
        component="header"
        gutterBottom
      >
        Quadros de Gestão à Vista
      </Typography>
      {
        management.length > 1 && management.map((item, index) => (
          <CardPainting
            key={ index }
            management={ item }
            change={ setManagement }
          />
        ))
      }
    </Box>
  );
};