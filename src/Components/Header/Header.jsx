import React from 'react';
import Grid from '@material-ui/core/Grid';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <Grid container={true}>
      <Grid item={true} xs={6}></Grid>
      <Grid container={true} item={true} xs={6}>
        <Grid item={true} xs={4}>
          <NavLink exact to='/' activeClassName='current'>
            Home
          </NavLink>
        </Grid>
        <Grid item={true} xs={4}>
          <NavLink exact to='/blog' activeClassName='current'>
            Blog
          </NavLink>
        </Grid>
        <Grid item={true} xs={4}>
          <NavLink exact to='/contact' activeClassName='current'>
            Contact
          </NavLink>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;
