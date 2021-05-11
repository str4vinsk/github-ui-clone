import React from "react";

import {
  Container,
  Flex,
  Avatar,
  Info,
  Row,
  PIcon,
  Column,
  CompanyIcon,
  EmailIcon,
  LocationIcon,
  BlogIcon,
  TwitterIcon,
} from "./styles";

function ProfileData(props) {
  return (
    <Container>
      <Flex>
        <Avatar src={props.avatarUrl} />
        <Info>
          <strong>{props.name}</strong>
          <span>{props.username}</span>
          <p>{props.bio}</p>
        </Info>
      </Flex>
      <Row>
        <li>
          <PIcon />
          <b>{props.followers}</b>
          <span>followers</span>
          <p>·</p>
        </li>
        <li>
          <b>{props.following}</b>
          <span>following</span>
        </li>
      </Row>
      <Column>
        {props.company && (
          <li>
            <CompanyIcon />
            <span>{props.company}</span>
          </li>
        )}
        {props.email && (
          <li>
            <EmailIcon />
            <span>{props.email}</span>
          </li>
        )}
        {props.location && (
          <li>
            <LocationIcon />
            <span>{props.location}</span>
          </li>
        )}
        {props.blog && (
          <li>
            <BlogIcon />
            <a href={props.blog}>{props.blog}</a>
          </li>
        )}
        {props.twitter && (
          <li>
            <TwitterIcon />
            <a href={`https://twitter.com/${props.twitter}`}>
              @{props.twitter}
            </a>
          </li>
        )}
      </Column>
    </Container>
  );
}

export default ProfileData;
