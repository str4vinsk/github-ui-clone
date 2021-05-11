import styled, { css } from "styled-components";
import {
  RiGroupLine,
  RiBuilding4Line,
  VscTwitter,
  RiMapPin2Line,
  RiMailLine,
  RiLinksLine,
} from "../../styles/Icons";

export const Container = styled.div`
  margin-bottom: 18px;
`;
export const Flex = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 24px;

  @media (min-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
export const Avatar = styled.img`
  width: 16%;
  border-radius: 50%;
  flex-shrink: 0;

  @media (min-width: 768px) {
    width: 95%;
  }
`;
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;

  > strong {
    font-size: 26px;
  }

  > span {
    font-size: 20px;
    color: var(--gray);
  }

  > p {
    font-size: 16px;
    margin-top: 20px;
  }

  @media (min-width: 768px) {
    margin-left: 0;
    margin-top: 16px;
  }
`;
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style: none;
  cursor: pointer;

  margin-bottom: 20px;

  > li {
    display: flex;
    align-items: center;

    &:hover {
      > b {
        color: var(--link);
      }

      > span {
        color: var(--link);
      }

      > svg {
        fill: var(--link);
      }
    }

    > b {
      margin-right: 4px;
    }

    > span {
      color: var(--gray);
    }

    > p {
      margin: 0 8px;
    }
  }
`;

const iconCss = css`
  width: 16px;
  height: 16px;
  fill: var(--icon);
  margin-right: 5px;
`;

export const PIcon = styled(RiGroupLine)`
  ${iconCss}
`;
export const Column = styled.div`
  list-style: none;
  font-size: 14px;

  > li {
    display: flex;
    align-items: center;
    margin-top: 8px;

    > a {
      text-decoration: none;
    }

    &:hover {
      > a {
        color: var(--link);
        text-decoration: underline;
      }
    }
  }
`;
export const CompanyIcon = styled(RiBuilding4Line)`
  ${iconCss}
`;
export const TwitterIcon = styled(VscTwitter)`
  ${iconCss}
`;
export const EmailIcon = styled(RiMailLine)`
  ${iconCss}
`;
export const LocationIcon = styled(RiMapPin2Line)`
  ${iconCss}
`;
export const BlogIcon = styled(RiLinksLine)`
  ${iconCss}
`;
