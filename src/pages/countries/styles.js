export const countriesStyles = {
  buttonContainer: {
    marginBottom: 10
  },
  buttonActive: {
    backgroundColor: "#d0cfcf",
    border: "2px solid #3f51b5"
  },
  buttonDefault: {
    backgroundColor: "#d0cfcf"
  }
};

export const countryStyles = theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
});
