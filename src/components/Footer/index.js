import React from "react";
import { Container, List, GithubIcon } from "./styles";

function Footer() {
  return (
    <Container>
      <List>
        <li>Terms</li>
        <li>Privacy</li>
        <li>Security</li>
        <li>Status</li>
        <li>Docs</li>
      </List>
      <GithubIcon />
      <List>
        <li>Contact Github</li>
        <li>Pricing</li>
        <li>API</li>
        <li>Training</li>
        <li>Blog</li>
      </List>
    </Container>
  );
}

export default Footer;
