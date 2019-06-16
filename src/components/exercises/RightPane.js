import {Grid, Paper} from "@material-ui/core";
import React from "react";

const RightPane = ({ style }) => (
  <Grid item xs={12} sm>
    <Paper style={ style.Paper }>
      Right Pane
    </Paper>
  </Grid>
);

export default RightPane;