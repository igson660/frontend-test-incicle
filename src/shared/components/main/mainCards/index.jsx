import { Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import PublicIcon from '@mui/icons-material/Public';

export const MainCards = ({ data }) => {
  const { title, type, description, info, file, invited_people } = data;


  return(
    <Box>
      <img src={ file.url }/>
      <Typography>
        { title }
      </Typography>
      <div>
        <span>{ type }</span>
        <span>{ `${ info.date } ${ info.place ? info.place : ''}` }</span>
        <span>{ ` de ${ invited_people !== undefined ? invited_people.length : 0 }` }</span>
      </div>
      <Typography>
        { description }
      </Typography>
      <PublicIcon />
    </Box>
  );
};

MainCards.propTypes = {
  data: PropTypes.object,
  title: PropTypes.string,
  type: PropTypes.string,
  description: PropTypes.string,
  info: PropTypes.object,
  file: PropTypes.string,
  invited_people: PropTypes.array,
};
