import React, { Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Flag from "./Flag";
import { countryStyles } from "./styles";

const GridItem = ({ name, value }) => (
  <Grid container>
    <Grid item xs={4}>
      <Typography>{name}</Typography>
    </Grid>
    <Grid item xs={6}>
      <Typography>{value}</Typography>
    </Grid>
  </Grid>
);

const Country = ({ country, classes }) => (
  <ExpansionPanel>
    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
      <Grid container alignItems="center">
        <Flag url={country.flag} />
        <Typography className={classes.heading}>{country.name}</Typography>
      </Grid>
    </ExpansionPanelSummary>
    <ExpansionPanelDetails>
      <Grid container>
        <GridItem name="Name:" value={country.name} />
        <GridItem name="Alpha2Code:" value={country.alpha2Code} />
        <GridItem name="Capital:" value={country.capital} />
        <GridItem name="Region:" value={country.region} />
        <GridItem name="Population:" value={country.population} />
        <GridItem name="Area:" value={country.area} />
        <GridItem
          name="Number of timezones:"
          value={country.timezones.length}
        />
        <GridItem
          name="Languages:"
          value={country.languages.map((language, index) => (
            <Fragment>
              <span>{language.name}</span>
              {index !== country.languages.length - 1 && <span>, </span>}
            </Fragment>
          ))}
        />
      </Grid>
    </ExpansionPanelDetails>
  </ExpansionPanel>
);

export default withStyles(countryStyles)(Country);
