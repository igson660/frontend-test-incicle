import React, { useState } from 'react';
import PropTypes from 'prop-types';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useAppContext } from '../../../hooks';

export const LongMenu = ({ id }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const { setMainData, mainData } = useAppContext();

  const exclude = (idCard) => {
    const newData = mainData.filter(({ id }) => id !== idCard);
    setMainData(newData);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open && 'long-menu'}
        aria-expanded={open && 'true'}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreHorizIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            width: '20ch',
          },
        }}
      >
        <MenuItem
          selected={ 'Excluir' === 'Pyxis'}
          onClick={ () => { handleClose; exclude(id); } }>
            Excluir
        </MenuItem>
      </Menu>
    </div>
  );
};

LongMenu.propTypes = {
  id: PropTypes.number,
};

