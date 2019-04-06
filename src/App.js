import React from "react";
import { Switch, Route } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Regions from "./pages/regions";
import Countries from "./pages/countries";
import Header from "./components/shared/Header";
import NoMatch from "./components/shared/NoMatch";
import { appStyles } from "./styles";

const App = ({ classes }) => (
  <Grid>
    <Header />
    <Grid className={classes.wrapper}>
      <Switch>
        <Route exact path="/" component={Regions} />
        <Route path="/region/:id" component={Countries} />
        <Route component={NoMatch} />
      </Switch>
    </Grid>
  </Grid>
);
export default withStyles(appStyles)(App);
