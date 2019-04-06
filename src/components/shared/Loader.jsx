import React from "react";
import { withStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";
import { loaderStyles } from "./styles";

const Loader = ({ children, loading }) => {
  const StyledLoader = withStyles(loaderStyles)(({ classes }) => (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.wrapper}
    >
      <CircularProgress className={classes.progress} />
    </Grid>
  ));

  if (loading) {
    return <StyledLoader />;
  } else {
    return children;
  }
};

export default Loader;
