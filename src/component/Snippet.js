import React, { Fragment } from "react";
import { Description, Title } from "../elements/styled";

const Snippet = ({ item }) => {
  return (
    <Fragment>
      <Title>{item.snippet.title}</Title>
      <Description>Description : {item.snippet.description}</Description>
    </Fragment>
  );
};
export default Snippet;
