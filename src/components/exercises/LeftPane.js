import {Avatar, Grid, List, ListItem, ListItemAvatar, ListItemText, Paper, Typography} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import ImageIcon from '@material-ui/icons/FitnessCenter';
import React, {Fragment} from "react";

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: 175,
    maxHeight: 360,
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    overflowX: 'auto'
  },
  inline: {
    display: 'inline',
  },
  flex: {
    flex: 1
  }
}));


const LeftPane = ({style, workouts}) => {
  const classes = useStyles;
  return (
    <Grid item xs={12} sm>
      <Paper style={style.Paper}>
        <List className={classes.root}>
          {
            workouts.map(([group, workouts]) => (
              <Fragment>
                <ListItem alignItems="flex-start">
                  <ListItemText primary={group}/>
                </ListItem>
                {
                  workouts.map(wo => (
                    <ListItem className={classes.flex} alignItems="flex-start">
                      <ListItemAvatar>
                        <Avatar>
                          <ImageIcon/>
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          <Typography
                            variant='h6'
                            color='initial'
                            className={classes.inline}
                          >
                            {wo.title}
                          </Typography>
                        }
                        secondary={
                          <Fragment>
                            <Typography
                              variant='body2'
                              color='initial'
                              className={classes.flex}
                            >
                              {wo.description}
                            </Typography>
                          </Fragment>
                        }
                      />
                    
                    </ListItem>
                  ))
                }
              </Fragment>
            ))
          }
        </List>
      </Paper>
    </Grid>
  )
};

export default LeftPane;