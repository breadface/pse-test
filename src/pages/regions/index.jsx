import React, { useCallback } from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { regionStyles } from "./styles";

const regionList = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

const Regions = ({ classes, history }) => (
  <Grid container spacing={16}>
    {regionList.map((name, key) => (
      <Grid item md={3} xs={12}>
        <Card
          container
          className={classes.card}
          onClick={useCallback(
            () => {
              history.push(`/region/${name}`);
            },
            [history]
          )}
        >
          <CardContent>
            <Typography variant="h5" component="h2">
              {name}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    ))}
  </Grid>
);

export default withStyles(regionStyles)(Regions);
