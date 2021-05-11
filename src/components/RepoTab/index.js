import React from "react";
import {
  Container,
  Tabs,
  OpenBookIcon,
  BookMarkIcon,
  GraphIcon,
  BoxIcon,
} from "./styles";

function RepoTab(props) {
  return (
    <Container>
      <Tabs>
        <li>
          <OpenBookIcon />
          <strong>Overview</strong>
        </li>
        <li>
          <BookMarkIcon />
          <strong>Repositories</strong>
          <span>{props.count}</span>
        </li>
        <li>
          <GraphIcon />
          <strong>Projects</strong>
        </li>
        <li>
          <BoxIcon />
          <strong>Packages</strong>
        </li>
      </Tabs>
    </Container>
  );
}

export default RepoTab;
