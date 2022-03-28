import Box from '@mui/material/Box';
import { lightTheme } from '../../../shared';
import styled from '@emotion/styled';
import logo from  '../../../data/logo.png';

export const Img = styled.div`
  width: 600px;
  height: 100px;
  margin: 0.5vw;
  margin-left: 30px;
  background-repeat: no-repeat;
  background-image: url(${logo});
`;

export const Header = () => {
  return(
    <Box
      width="100vw"
      height="7vh"
      bgcolor={ lightTheme.palette.background.paper }
    >
      <Img />
    </Box>
  );
};
