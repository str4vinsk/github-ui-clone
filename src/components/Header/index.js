import React, { useState } from "react";
import {
  Container,
  Init,
  MenuIcon,
  GitIcon,
  GitCenterIcon,
  DownIcon,
  Items,
  SearchBar,
  End,
  RepoInfo,
  ProfileInfo,
} from "./styles";
import { useNavigate } from "react-router-dom";

function Header() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    if (e.key === "Enter") {
      navigate("/" + search.toLowerCase().trim());
    }
  }

  return (
    <Container>
      <MenuIcon />
      <Init>
        <GitIcon />
        <SearchBar
          placeholder="Search or jump to..."
          value={search}
          onChange={(e) => setSearch(e.currentTarget.value)}
          onKeyDown={handleSubmit}
        />
        <Items>Pulls</Items>
        <Items>Issues</Items>
        <Items>Marketplace</Items>
        <Items>Explore</Items>
      </Init>
      <GitCenterIcon />
      <End>
        <RepoInfo />
        <ProfileInfo />
        <DownIcon />
      </End>
    </Container>
  );
}

export default Header;
