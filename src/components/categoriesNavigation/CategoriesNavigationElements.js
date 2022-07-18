import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.bgLight};
  height: 56px;
  border-top: 1px solid ${({ theme }) => theme.hover};
  border-bottom: 1px solid ${({ theme }) => theme.hover};
  overflow-x: hidden;
`;
export const CategoryButton = styled.button`
  cursor: pointer;
  min-width: fit-content;
  border-radius: 16px;
  height: 32px;
  padding: 0 16px;
  margin-right: 12px;
  font-size: 14px;
  background-color: ${({ theme }) => theme.hover};
  border: 1px solid ${({ theme }) => theme.hover};
  color: ${({ theme }) => theme.text};
  &:first-child {
    margin-left: 12px;
  }
`;
