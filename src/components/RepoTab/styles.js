import styled, { css } from "styled-components";
import {
  BiBookBookmark,
  BiBookOpen,
  BiCube,
  VscGraph,
} from "../../styles/Icons";

export const Container = styled.div`
  position: sticky;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
  margin: 20px 0;
  border-bottom: 1px solid var(--border);
`;
export const Tabs = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;

  > li {
    display: flex;
    align-items: center;
    padding: 8px 12px;
    height: 40px;
    flex: 1;
    cursor: pointer;

    > strong {
      font-size: 14px;
      font-weight: 100;
    }

    > span {
      background-color: var(--border);
      margin-left: 8px;
      padding: 2px 7px;
      border-radius: 8px;
      font-size: 12px;
    }

    &:hover {
      border-bottom: 1px solid var(--orange);
    }
  }
`;

const iconCss = css`
  display: none;
  width: 20px;
  height: 20px;
  fill: var(--icon);
  margin-right: 8px;

  @media (min-width: 768px) {
    display: block;
  }
`;

export const OpenBookIcon = styled(BiBookOpen)`
  ${iconCss}
`;
export const BookMarkIcon = styled(BiBookBookmark)`
  ${iconCss}
`;
export const GraphIcon = styled(VscGraph)`
  ${iconCss}
`;
export const BoxIcon = styled(BiCube)`
  ${iconCss}
`;
