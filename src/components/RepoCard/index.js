import React from "react";

import {
  Container,
  Feedback,
  StarIcon,
  ForkIcon,
  BookMarkIcon,
  Title,
} from "./styles";

function RepoCard(props) {
  return (
    <Container>
      <Title>
        <BookMarkIcon />
        <strong>{props.reponame}</strong>
      </Title>
      <span>{props.description}</span>
      <Feedback>
        <li>
          <StarIcon />
          <span>{props.stars}</span>
        </li>
        <li>
          <ForkIcon />
          <span>{props.forks}</span>
        </li>
      </Feedback>
    </Container>
  );
}

export default RepoCard;
