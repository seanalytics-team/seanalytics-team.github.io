import { Container, Grid, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(() => ({
  root: {
    background: "linear-gradient(45deg, #1976d2 30%, #fff 90%)",
    position: "fixed",
    width: "100%",
    height: "100%",
  },
  titleGrid: {
    textAlign: "center",
    fontSize: "3em",
  },
  subtitleGrid: {
    textAlign: "center",
    fontSize: "1.5em",
  },
}));

const LandingPage: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      className={classes.root}
      direction="column"
      justify="center"
    >
      <Grid className={classes.titleGrid}>
        Se<strong>analytics</strong>
      </Grid>
      <Grid className={classes.subtitleGrid}>Is comming soon!</Grid>
    </Grid>
  );
};

export default LandingPage;
