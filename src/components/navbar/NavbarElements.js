import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 4;
  background-color: ${({ theme }) => theme.bgLight};
  height: 56px;
  color: ${({ theme }) => theme.text};
`;
export const Wrapper = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  padding: 0 24px;
  flex: 1;
  justify-content: flex-end;
`;
export const LogoSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  cursor: pointer;
`;
export const Logo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  font-weight: 500;
  font-size: 18px;
`;
export const Img = styled.img`
  height: 22px;
`;
export const SearchContainer = styled.div`
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* padding: 5px; */
`;
export const Input = styled.input`
  flex: 1;
  border: 1px solid ${({ theme }) => theme.borderColor};
  outline: none;
  box-shadow: inset 0 1px 2px ${({ theme }) => theme.boxShadow};
  padding: 0 5px;
  height: 40px;
  font-size: 16px;
  background-color: ${({ theme }) => theme.bgLight};
  color: ${({ theme }) => theme.text};
  &:focus {
    box-shadow: inset 0 1px 2px ${({ theme }) => theme.boxShadow};
    border: 1px solid ${({ theme }) => theme.hover};
  }
  &::placeholder {
    font-size: 16px;
  }
`;
export const SearchIconContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.hover};
  height: 40px;
  width: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.buttonGrey};
  cursor: pointer;
`;
export const UserImg = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: grey;
  position: relative;
`;
