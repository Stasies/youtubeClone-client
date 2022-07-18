import styled from "styled-components";

export const Container = styled.div`
  position: ${(props) => props.position};
  transform: ${(props) => props.transform};
  width: ${(props) => props.width};
  flex: 2;
  background-color: ${({ theme }) => theme.bgLight};
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  top: 0;
  height: 100vh;
  transition: 0.1s ease-in-out;
`;
export const Wrapper = styled.div`
  padding: 0;
  height: calc(100% - 80px);
  overflow-y: auto;
  padding: 12px 0;
`;
// export const Main = styled.div``;
export const LogoSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 56px;
  /* padding: 18px 24px 0; */
  gap: 20px;
  z-index: 5;
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
export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  cursor: pointer;
  padding: 7.5px 24px;
  &:hover {
    background-color: ${({ theme }) => theme.hover};
  }
`;
export const ChannelIcon = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.grey};
`;
export const Hr = styled.hr`
  margin: 15px 0;
  padding: 0;
  border: none;
  border-bottom: 0.5px solid ${({ theme }) => theme.hover};
`;
export const Title = styled.h2`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.textSoft};
  margin-bottom: 20px;
  padding: 0 24px;
`;
export const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  width: fit-content;
`;

export const Login = styled.div`
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
