import styled from "styled-components";
export const Container = styled.div`
  position: absolute;
  top: 46px;
  background-color: ${({ theme }) => theme.bgLight};
  border: 1px solid ${({ theme }) => theme.hover};
  min-width: 298px;
`;
export const Account = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.hover};
  padding: 16px;
  display: flex;
  flex-direction: row;
  cursor: pointer;
`;
export const UserImg = styled.div`
  border-radius: 50%;
  background-color: grey;
  width: 40px;
  height: 40px;
  margin-right: 16px;
`;
export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Username = styled.div`
  font-size: 16px;
  line-height: 22px;
  font-weight: 500;
  margin-bottom: 10px;
`;
export const Settings = styled.div`
  color: ${({ theme }) => theme.blue};
  font-size: 14px;
`;
export const MenuItemWrapper = styled.div`
  padding: 8px 0;
`;
export const MenuItem = styled.div`
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 36px 0 16px;
  font-size: 14px;
  color: ${({ theme }) => theme.text};
  gap: 16px;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.hover};
  }
`;
export const Hr = styled.div``;
