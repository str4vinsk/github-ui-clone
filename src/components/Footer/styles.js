import styled from "styled-components";
import { AiFillGithub } from "../../styles/Icons";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 40px 0 8px;
  border-top: 1px solid var(--border);
  max-width: 1280px;
  margin: 40px auto 8px;

  @media (min-width: 698px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
export const List = styled.ul`
  display: flex;
  flex-direction: row;

  > li {
    margin: 0 10px;
    color: var(--link);
    font-size: 12px;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;
export const GithubIcon = styled(AiFillGithub)`
  display: none;
  fill: var(--icon);
  width: 24px;
  height: 24px;

  @media (min-width: 698px) {
    display: block;
  }
`;
