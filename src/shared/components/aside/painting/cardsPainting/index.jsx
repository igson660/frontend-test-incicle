import { Typography, Box } from '@mui/material';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import PublicIcon from '@mui/icons-material/Public';


const DivImg = styled.div`
  width: 60px;
  height: 60px;
  margin-left: 7px;
`;

const Div = styled.div`
  display: flex;
`;

export const CardPainting = ({ management }) => {
  const { title, resume_files } = management;

  return(
    <Box
      width="263.08px"
      height="86.39px"
      display="flex"
      flexDirection="collunm"
    >
      <Div>
        <Typography
          variant="subtitle1"
          gutterBottom
          component="div"
        >
          { title }
        </Typography>
        <Div>
          <div>{ PublicIcon }</div>
          <button>{ PublicIcon }</button>
        </Div>
      </Div>
      <Div>
        {
          resume_files && resume_files.map(({ file }, index) => (
            <DivImg key={ index } >
              <img 
                src={file}
                alt={ `imagen ${file}`}
              />
            </DivImg>
          ))
        }
      </Div>
    </Box>
  );
  
};

CardPainting.propTypes = {
  title: PropTypes.string,
  management: PropTypes.object,
  resume_files: PropTypes.array
};

