import { Typography, Box } from '@mui/material';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
// import PublicIcon from '@mui/icons-material/Public';


const Img = styled.img`
  width: 60px;
  height: 60px;
  margin-left: 7px;
`;

const Div = styled.div`
  display: flex;
`;

export const CardPainting = ({ management }) => {
  const {
    title,
    resume_files
  } = management;

  return(
    <Box
      width="263.08px"
      height="86.39px"
      display="flex"
      flexDirection="collunm"
      bgcolor="primary"
    >
      <Div>
        <Typography
          variant="subtitle1"
          gutterBottom
          component="div"
        >
          { title }
        </Typography>
        {/* <Div>
          <div>{ PublicIcon }</div>
          <button>{ PublicIcon }</button>
        </Div> */}
        {
          resume_files && resume_files.map(({ file }, index) => (
            <Img
              key={ index }
              src={file}
              alt={ `imagen ${file}`}
            />
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

