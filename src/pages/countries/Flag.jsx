import React from "react";
import { withStyles } from "@material-ui/core/styles";

const Flag = ({ url }) => {
  let styles = {
    flag: {
      backgroundImage: `url(${url})`,
      backgroundSize: "contain",
      height: 15,
      marginRight: 10,
      width: 20
    }
  };
  let content = ({ classes }) => <div className={classes.flag} />;
  let Styled = withStyles(styles)(content);
  return <Styled />;
};

export default Flag;
