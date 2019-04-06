import React, { Fragment, useState, useEffect, useCallback } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Loader from "../../components/shared/Loader";
import List from "../../components/shared/List";
import Country from "./Country";
import { countriesStyles } from "./styles";
import config from "../../config";

const Countries = ({ match, classes }) => {
  const [region, setRegion] = useState([]);
  const [sortBy, setSortBy] = useState("name");
  const [isLoading, setLoading] = useState(true);

  useEffect(
    () => {
      setLoading(true);
      (async () => {
        try {
          let response = await fetch(`${config.api}/${match.params.id || ""}`);
          let result = await response.json();
          if (result.length) {
            setRegion(result);
          }
          setLoading(false);
        } catch (e) {
          setLoading(false);
          throw Error("Something went wrong");
        }
      })();
    },
    [match.params.id, config.api]
  );

  const onSortBy = useCallback(name => {
    return () => setSortBy(name);
  });

  return (
    <Loader loading={isLoading}>
      {region.length ? (
        <Fragment>
          <div>
            <Grid className={classes.buttonContainer}>
              Sort by:
              <Button focusVisible onClick={onSortBy("name")}>
                Name
              </Button>
              <Button focusVisible onClick={onSortBy("population")}>
                Population
              </Button>
            </Grid>
          </div>

          <List.Sort sortBy={sortBy}>
            {region.map(country => (
              <Country country={country} />
            ))}
          </List.Sort>
        </Fragment>
      ) : (
        <div>There are no results</div>
      )}
    </Loader>
  );
};

export default withStyles(countriesStyles)(Countries);
