import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${({ theme }) => theme.bg};
  z-index: 1;
  margin-top: 56px;
  left: 0;
`;
