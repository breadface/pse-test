import React from "react";

const List = {
  Sort: ({ children, sortBy }) => {
    return React.Children.toArray(children).sort((a, b) => {
      let aProp = a.props.country[sortBy];
      let bProp = b.props.country[sortBy];
      return aProp - bProp;
    });
  }
};

export default List;
