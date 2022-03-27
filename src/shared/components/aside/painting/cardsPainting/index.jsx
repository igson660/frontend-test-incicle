import { Typography, Box } from '@mui/material';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import PublicIcon from '@mui/icons-material/Public';
import { LongMenu } from './buttton';


const Img = styled.img`
  width: 4vw;
  height: 6vh;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
`;

const Albun = styled.div`
  width: 20.5vw;
  display:flex;
  flex-direction: row;
  justify-content: space-around;
`;

const DivHeader = styled.div`
  width: 20.5vw;
  display: flex;
  justify-content: space-between;
`;

const DivButtons = styled.div`
  display: flex;
  align-items: center;
`;

export const CardPainting = ({ management, index }) => {
  const {
    title,
    resume_files
  } = management;

  return(
    <Box
      width="20.5vw"
      height="10vh"
      margin="10px"
      display="flex"
      flexDirection="collunm"
      bgcolor="#F2F3F5"
    >
      <Div>
        <DivHeader>
          <Typography
            marginLeft="0.5vw"
            variant="subtitle1"
            gutterBottom
            component="div"
          >
            { title }
          </Typography>
          <DivButtons>
            <PublicIcon />
            <LongMenu
              index={ index }
            />
          </DivButtons>
        </DivHeader>
        <Albun>
          {
            resume_files && resume_files.map(({ file }, index) => (
              <Img
                key={ index }
                src={file}
                alt={ `imagen ${file}`}
              />
            ))
          }
        </Albun>
      </Div>
    </Box>
  );
  
};

CardPainting.propTypes = {
  title: PropTypes.string,
  management: PropTypes.object,
  resume_files: PropTypes.array,
  index: PropTypes.number,
};

