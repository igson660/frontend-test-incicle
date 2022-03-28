import React, { useState } from 'react';
import { Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import Modal from '@mui/material/Modal';
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

const SpanInvite = styled.span`
color: #3489B1;
text-decoration: underline;
font-size: 9pt;
margin: 3px;
  &:hover {
    cursor: pointer;
  }
`;

const DivModal = styled.div`
  display: flex;
  margin: 7px;
`;

const PModal = styled.p`
  margin: 0;
`;


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const countConfirmed = (invites) => {
  const verify = invites.filter(({ confirmed_presence })=> confirmed_presence === true );
  return verify.length;
};

export const MainCards = ({ data }) => {
  const { title, type, description, info, file, invited_people, id } = data;
  const [open, setOpen] = useState(false);
  const handle = () => setOpen(!open);

  return(
    <Box
      bgcolor="#FFFFFF"
      display="flex"
      alignItems="center"
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
            <SpanInvite
              onClick={handle}
            >
              {
                invited_people !== undefined ?
                  `| ${countConfirmed(invited_people)} CONFIRMAÇÕES DE ${invited_people.length}` :
                  null
              }
            </SpanInvite>
            <Modal
              open={open}
              onClose={handle}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                {
                  invited_people !== undefined && invited_people.map((person, index) => (
                    <DivModal key={ index }>
                      <Img src={ person.avatar } alt={ person.name } />
                      <div>
                        <PModal><strong>nome:</strong> { person.name }</PModal>
                        <PModal><strong>nome de usuário:</strong> { person.username }</PModal>
                        <PModal>{ person.confirmed_presence ? 'Confimado' : 'Não Confirmado'}</PModal>
                      </div>
                    </DivModal>
                  ))
                }
              </Box>
            </Modal>
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
