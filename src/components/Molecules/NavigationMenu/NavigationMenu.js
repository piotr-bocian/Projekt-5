import React, { useState } from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PetsOutlinedIcon from '@material-ui/icons/PetsOutlined';
import NavigationText from '../../Atoms/NavigationText/NavigationText';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function AnimalMenu({
  menuIterator,
  mainText,
}) {
  let { path, url } = useRouteMatch(); //pytanie czy to zadziałą po deplumencie skoro nie może działać na localhost
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);

  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <NavigationText mainText={mainText} handleClick={handleClick} />
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {menuIterator.map((text, id) => {
          return (
            <StyledMenuItem key={id} component={NavLink} to={`/${text.route}`} exact>
              <ListItemIcon>
                <PetsOutlinedIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText component={NavLink} primary={text.name} />
            </StyledMenuItem>
          );
        })}
      </StyledMenu>
    </div>
  );
}
