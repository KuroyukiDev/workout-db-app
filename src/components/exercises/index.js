import React from 'react';
import { Container, Grid } from '@material-ui/core';
import LeftPane from "./LeftPane";
import RightPane from "./RightPane";

const style = {
  gridContainer: {
    marginTop: 8,
    marginBottom: 8
  },
  gridItem: {
  
  },
  Paper: {
    padding: 28
  }
};

const Workouts = ({ workouts }) => (
  <Container maxWidth="fixed">
    <Grid style={style.gridContainer} container spacing={2}>
      <LeftPane workouts={workouts} style={style} />
      <RightPane style={style} />
    </Grid>
  </Container>
);

export default Workouts;