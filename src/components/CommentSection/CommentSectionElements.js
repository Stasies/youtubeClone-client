import styled from "styled-components";

export const CommentContainer = styled.div`
  width: 976px;
`;
export const CommentsInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 32px 0;
  gap: 16px;
  color: ${({ theme }) => theme.text};
  font-size: 16px;
`;
export const CommentsInfoButton = styled.button`
  border: none;
  outline: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: transparent;
  gap: 4px;
  font-size: 14px;
  font-weight: 500;
  position: relative;
`;
export const SelectMenu = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  padding: 8px 0;
  height: fit-content;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
  border-radius: 4px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12),
    0 3px 1px -2px rgba(0, 0, 0, 0.2);
  .active {
    background-color: ${({ theme }) => theme.active};
  }
`;
export const Option = styled.div`
  padding: 0 16px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: ${({ theme }) => theme.hover};
  }
`;
export const CommentInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  gap: 10px;
  margin-top: 24px;
  margin-bottom: 32px;
`;
export const Input = styled.textarea`
  border: none;
  outline: none;
  resize: none;
  width: 90%;
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
  background-color: transparent;
  height: ${(props) => props.height};
`;

export const CommentWrapper = styled.div``;
export const Comment = styled.div``;
export const CommentLeft = styled.div``;
export const CommentRight = styled.div``;
export const CommentRightInfo = styled.div``;
export const CommentText = styled.div``;
export const CommentActions = styled.div``;
export const UserImg = styled.div`
  width: 40px;
  height: 40px;
  background-color: grey;
  border-radius: 50%;
`;
export const Username = styled.div``;
export const Date = styled.div``;
