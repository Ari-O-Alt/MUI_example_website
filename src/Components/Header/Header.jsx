import React from 'react';
import Grid from '@material-ui/core/Grid';
import { NavLink } from 'react-router-dom';
import { Button, ButtonGroup } from '@material-ui/core';
import './Header.css';

const Header = () => {
  return (
    <Grid container={true} className='headerContainer'>
      <Grid container={true} item={true} xs={6} className='logoContainer'>
        <Grid className='logo'></Grid>
      </Grid>
      <Grid container={true} item={true} xs={6} className='navItemsContainer'>
        <ButtonGroup variant='text' aria-label='text primary button group'>
          <Button>
            <NavLink exact to='/' activeClassName='current' className='navLink'>
              Home
            </NavLink>
          </Button>
          <Button>
            <NavLink exact to='/blog' activeClassName='current' className='navLink'>
              Blog
            </NavLink>
          </Button>
          <Button>
            <NavLink exact to='/contact' activeClassName='current' className='navLink'>
              Contact
            </NavLink>
          </Button>
        </ButtonGroup>
      </Grid>
    </Grid>
  );
};

export default Header;
