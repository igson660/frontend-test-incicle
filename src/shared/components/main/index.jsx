import { Typography, Button } from '@mui/material';
import { Box } from '@mui/system';
import { useAppContext } from '../../hooks';
import { MainCards } from './mainCards';
import styled from '@emotion/styled';
import AddIcon from '@mui/icons-material/Add';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 11px;
`;

export const Main = () => {
  const { setMainData, mainData, } = useAppContext();
  return(
    <Box
      marginLeft="4vw"
      width="70vw"
      height="91.8vh"
      padding="15px"
    >
      <Div>
        <Typography
          marginBottom="0"
          variant="h3"
          component="header"
          gutterBottom
        >
        Endomarketing
        </Typography>
        <div>
          <Button
            variant="outlined"
          >
            Tipo
            <ArrowDropDownIcon />
          </Button>
          <Button
            variant="contained"
          >
            Criar
            <AddIcon />
          </Button>
        </div>
      </Div>
      <div>
        {
          mainData.length > 0 && mainData.map((item, index) => (
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
