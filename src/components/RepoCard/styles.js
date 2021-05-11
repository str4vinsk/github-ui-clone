import styled, { css } from "styled-components";
import { BiBookBookmark, BiStar, VscRepoForked } from "../../styles/Icons";

export const Container = styled.div`
  width: 98%;
  border: 2px solid var(--border);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;

  border-radius: 5px;

  > span {
    margin: 8px 0 16px;
    font-size: 12px;
    color: var(--gray);
  }
`;
export const Feedback = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;

  > li {
    display: flex;
    align-items: center;
    margin-right: 8px;
    font-size: 12px;

    > span {
      color: var(--gray);
    }
  }
`;
export const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  > strong {
    cursor: pointer;
    color: var(--link);
    font-size: 14px;

    &:hover {
      text-decoration: underline;
    }
  }

  > svg {
    margin-right: 5px;
  }
`;

const iconCss = css`
  width: 20px;
  fill: var(--icon);
`;

export const StarIcon = styled(BiStar)`
  ${iconCss}
`;
export const ForkIcon = styled(VscRepoForked)`
  ${iconCss}
`;
export const BookMarkIcon = styled(BiBookBookmark)`
  ${iconCss}
`;
