// import React, { useState } from 'react';
import { Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import styled from '@emotion/styled';
import { LongMenu } from './butttonMain';

const Img = styled.img`
  width: 5vw;
  height: 7vh;
  margin:5px;
`;

const Div = styled.div`
  margin: 5px;
`;

const DivMain = styled.div`
  display: flex;
  align-items: center;
`;

const DivSpan = styled.div`
  margin-bottom: 3px;
`;

const Span = styled.span`
  font-size: 9pt;
  margin: 3px;
`;

const countConfirmed = (invites) => {
  const verify = invites.filter(({ confirmed_presence })=> confirmed_presence === true );
  return verify.length;
};

export const MainCards = ({ data }) => {
  const { title, type, description, info, file, invited_people, id } = data;

  return(
    <Box
      bgcolor="#FFFFFF"
      display="flex"
      alignItems="center"
      padding="10px"
      margin="11px"
      justifyContent="space-between"
    >
      <DivMain>
        <Img src={ file.url } alt={ file.url } />
        <Div>
          <Typography
            margin="0"
            variant="h6"
            gutterBottom
          >
            { title }
          </Typography>
          <DivSpan>
            <Span>{ type }</Span>
            <Span>{ `${ info.date } ${ info.place ? ` | ${info.place}` : ''}` }</Span>
            <Span>
              {
                invited_people !== undefined ?
                  `| ${countConfirmed(invited_people)} CONFIRMAÇÕES DE ${invited_people.length}` :
                  null
              }
            </Span>
          </DivSpan>
          <Typography
            variant="body2"
            gutterBottom
          >
            { description }
          </Typography>
        </Div>
      </DivMain>
      <LongMenu
        id={ id }
      />
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
