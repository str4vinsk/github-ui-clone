import styled from "styled-components";
import {
  AiFillGithub,
  GiHamburgerMenu,
  MdNotificationsNone,
  AiFillCaretDown,
} from "../../styles/Icons";

export const Container = styled.div`
  height: 64px;
  padding: 11px 16px;
  background-color: var(--header);

  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Init = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;

  @media (max-width: 692px) {
    display: none;
  }
`;
export const GitIcon = styled(AiFillGithub)`
  fill: var(--logo);
  height: 32px;
  width: 32px;

  flex-shrink: 0;

  margin-right: 10px;
  cursor: pointer;
`;
export const GitCenterIcon = styled(AiFillGithub)`
  fill: var(--logo);
  height: 42px;
  width: 42px;

  flex-shrink: 0;

  margin-right: 10px;
  cursor: pointer;

  @media (min-width: 692px) {
    display: none;
  }
`;
export const SearchWrapper = styled.div``;
export const SearchBar = styled.input`
  max-width: 400px;
  min-width: 242px;
  width: 20%;
  height: 30px;
  background-color: var(--search);
  color: var(--primary);
  padding: 0 12px;

  border-radius: 5px;
  transition: 0.2s;

  &:focus {
    border: 1px solid var(--link);
    width: 80%;
  }
`;
export const Items = styled.strong`
  color: var(--primary);
  font-size: 14px;

  cursor: pointer;
  transition: 0.2s;
  padding: 0 12px;

  &:hover {
    opacity: 0.7;
  }
`;
export const SearchIcon = styled.div``;
export const End = styled.div`
  display: flex;
  align-items: center;
`;
export const RepoInfo = styled(MdNotificationsNone)`
  fill: var(--primary);
  width: 25px;
  height: 25px;
  margin: 0 16px 0 0;
  cursor: pointer;
`;
export const MenuIcon = styled(GiHamburgerMenu)`
  fill: var(--primary);
  width: 32px;
  height: 32px;
  margin: 0 16px 0 0;
  cursor: pointer;

  @media (min-width: 692px) {
    display: none;
  }
`;
export const DownIcon = styled(AiFillCaretDown)`
  fill: var(--primary);
  width: 10px;
  height: 10px;
  margin: 0 5px;

  @media (max-width: 692px) {
    display: none;
  }
`;
export const ProfileInfo = styled.div`
  background-image: url("https://avatars.githubusercontent.com/u/64869691?v=4");
  background-position: center;
  background-size: cover;

  width: 23px;
  height: 23px;
  border-radius: 50%;
  cursor: pointer;

  @media (max-width: 692px) {
    display: none;
  }
`;
