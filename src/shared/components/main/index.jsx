import { Typography, Button } from '@mui/material';
import { Box } from '@mui/system';
import { useAppContext } from '../../hooks';
import { MainCards } from './mainCards';

export const Main = () => {

  const { setMainData, mainData, } = useAppContext();
  return(
    <Box
      width="70vw"
      height="91.8vh"
    >
      <div>
        <Typography
          variant="h2"
          component="header"
          gutterBottom
        >
        Endomarketing
        </Typography>
        <Button >
          Tipo
        </Button>
        <Button >
          Criar
        </Button>
      </div>
      <div>
        {
          mainData.length > 1 && mainData.map((item, index) => (
            <MainCards
              key={ index }
              data={ item }
              setdata={ setMainData }
            />
          ))
        }
      </div>
    </Box>
  );
};
