import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';
import React from 'react';

const Navbar = () => {
    return ( 

        <AppBar position="static">
            <Toolbar>
            <Typography variant="h6" >
      News
    </Typography>
    <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
     );
}
 
export default Navbar;