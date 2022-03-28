import React, { useState, useEffect } from 'react';
import * as allData from '../../../data';
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

const DivMenu = styled.div`
  width: 10vw;
  background-color: #FFFFFF;
  position: absolute;
`;

const DivItem = styled.div`
  margin: 0;
  padding: 0;
  height: 5vh;
  &:hover{
    background-color: #c0bbbb;
  }
`;

export const Main = () => {
  const { setMainData, mainData } = useAppContext();
  const [menu, setMenu] = useState(false);
  const [evento, setEvento] = useState(false);
  const [publi, setPubli] = useState(false);
  const [comun, setComun] = useState(false);

  useEffect(() => {
    const data = allData.data.data;
    const dataEvent = evento ? data.filter(({ type }) => type === 'event') : [];
    const dataPubli = publi ? data.filter(({ type }) => type === 'publication') : [];
    const dataComun = comun ? data.filter(({ type }) => type === 'release') : [];

    const newData = [...dataEvent, ...dataPubli, ...dataComun ];
    newData.length < 1 ? setMainData(data) : setMainData(newData);
  }, [evento, publi, comun]);


  return(
    <Box
      marginLeft="4vw"
      width="70vw"
      padding="15px"
    >
      <Div>
        <Typography
          marginBottom="0"
          variant="h3"
          fontSize="25pt"
          component="header"
          gutterBottom
        >
        Endomarketing
        </Typography>
        <Typography
          display="flex"
        >
          <Typography
            margin="4px"
          >
            <Button
              variant="outlined"
              onClick={() => setMenu(!menu) }
            >
                Tipo
              <ArrowDropDownIcon />
            </Button>
            {
              menu && (
                <DivMenu>
                  <DivItem>
                    <label>
                      <input
                        type="checkbox"
                        checked={evento}
                        onChange={ () => setEvento(!evento)}
                      />
                        Evento
                    </label>
                  </DivItem>
                  <DivItem>
                    <label>
                      <input
                        type="checkbox"
                        checked={publi}
                        onChange={ () => setPubli(!publi)}
                      />
                        Publicação
                    </label>
                  </DivItem>
                  <DivItem>
                    <label>
                      <input
                        type="checkbox"
                        checked={comun}
                        onChange={ () => setComun(!comun)}
                      />
                        Comunicado
                    </label>
                  </DivItem>
                </DivMenu>
              )
            }
          </Typography>
          <Typography
            margin="4px"
          >
            <Button
              variant="contained"
            >
              Criar
              <AddIcon />
            </Button>
          </Typography>
        </Typography>
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
