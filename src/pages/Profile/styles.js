import styled from "styled-components";

export const Container = styled.div`
  padding: 24px 16px;
`;
export const Main = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0 auto;
  max-width: 1280px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
export const LeftSide = styled.div`
  margin-right: 24px;

  @media (min-width: 768px) {
    width: 25%;
  }
`;
export const RightSide = styled.div`
  @media (min-width: 768px) {
    width: 75%;
    padding: 0 24px;
  }
`;
export const Advice = styled.p`
  font-size: 14px;
  margin: 50px 0 10px;
`;
export const Repos = styled.div`
  > h2 {
    font-size: 16px;
    font-weight: normal;
  }
  > div {
    margin-top: 8px;
    display: grid;
    grid-gap: 12px;

    grid-template-columns: 1fr;

    @media (min-width: 768px) {
      grid-template-columns: 1fr 1fr;
      grid-auto-rows: minmax(min-content, max-content);
    }
  }
`;
export const Readme = styled.div`
  border: 1px solid var(--border);
  border-radius: 5px;
  padding: 24px;
  width: 100%;
  margin-bottom: 20px;

  .md {
    font-size: 14px;
    margin-top: 20px;
  }

  > span {
    font-size: 12px;
  }
`;

