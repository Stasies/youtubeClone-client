import styled from "styled-components";

export const Container = styled.div`
  color: ${({ theme }) => theme.text};
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
`;
export const CommentLeft = styled.div``;
export const CommentRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
export const CommentRightInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  margin-bottom: 4px;
  gap: 8px;
`;
export const Username = styled.div`
  font-weight: 600;
  font-size: 13px;
`;
export const Date = styled.div`
  color: ${({ theme }) => theme.textSoft};
  font-size: 12px;
  &:hover {
    color: ${({ theme }) => theme.text};
    cursor: pointer;
  }
`;
export const CommentText = styled.div`
  font-size: 14px;
  line-height: 22px;
`;
export const CommentActions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 34px;
  gap: 8px;
  font-weight: 500;
  font-size: 12px;
  color: ${({ theme }) => theme.textSoft};
  .icon {
    width: 16px;
    height: 16px;
  }
`;
export const Action = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
`;
export const ReplyButton = styled.div`
  padding: 8px 13px;
  cursor: pointer;
`;
export const UserImg = styled.div`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  background-color: grey;
  border-radius: 50%;
  margin-right: 16px;
`;
export const ViewReplies = styled.div`
  color: ${({ theme }) => theme.blue};
  cursor: pointer;
  font-weight: 500;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const RepliesContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8px;
  gap: 4px;
`;
export const Reply = styled.div`
  display: flex;
  flex-direction: row;
`;
// export const ReplyUserImg = styled.div`
//   width: ${(props) => props.size};
//   height: ${(props) => props.size};
//   background-color: grey;
//   border-radius: 50%;
// `;
