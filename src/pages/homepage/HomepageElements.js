import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body{
    margin: 0;
    padding: 0;
    font-family: "Roboto", sans-serif;
}
a{
  text-decoration:none ;
  all: unset;
}
*::-webkit-scrollbar {
  width: 16px;
}
 
*::-webkit-scrollbar-track {
  background-color: ${({ theme }) => theme.bgLight};
  
}

*::-webkit-scrollbar-thumb {
  border-radius: 8px;
  background-color: ${({ theme }) => theme.grey};
  border: 4px solid ${({ theme }) => theme.bgLight};
  /* outline: 1px solid slategrey; */
}
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Main = styled.div`
  flex: 11;
  background-color: ${({ theme }) => theme.bg};
  margin-top: 56px;
`;
export const AllVideosContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 24px;
  flex-wrap: wrap;
`;
