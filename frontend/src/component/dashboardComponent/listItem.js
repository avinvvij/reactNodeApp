import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SignOutIcon from '@material-ui/icons/Lock';
import SwitchIcon from '@material-ui/icons/Ballot';
import HomeIcon from '@material-ui/icons/Home';
//Handle SignOut
const handleSignOut = (e) => {
  e.preventDefault();
  window.location = '/login';
}

//Handle SignOut
const handleHome = (e) => {
  e.preventDefault();
  window.location = '/dashboard';
}

//Handle SwitchBulb
const handleSwitchBulb = (e) => {
  e.preventDefault();
  window.location = '/switchbulb';
}

export const mainListItems = (
  <div>
    {/* Home */}
    <ListItem button onClick={handleHome}>
      <ListItemIcon>
        < HomeIcon />
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItem>

    {/* Switch Bulb */}
    <ListItem button onClick={handleSwitchBulb}>
      <ListItemIcon>
        < SwitchIcon />
      </ListItemIcon>
      <ListItemText primary="Switch Bulb" />
    </ListItem>

    {/* Sign Out */}
    <ListItem button onClick={handleSignOut}>
      <ListItemIcon>
        < SignOutIcon />
      </ListItemIcon>
      <ListItemText primary="Sign Out" />
    </ListItem>
  </div>
);
