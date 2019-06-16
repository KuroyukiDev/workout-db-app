import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1
//   },
//   menuButton: {
//     marginRight: theme.spacing(2)
//   },
//   title: {
//     flexGrow: 1
//   }
// }));


const styles = {
  flex: {
    flex: 1
  }
};

const Header = ({ classes }) => (
  <AppBar position='static'>
    <Toolbar>
      <Typography
        variant='h5'
        color='inherit'
        className={classes.flex}
      >
        Exercise Database
      </Typography>
      
    </Toolbar>
  </AppBar>
);


export default withStyles(styles)(Header);