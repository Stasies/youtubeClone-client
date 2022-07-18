import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  align-items: flex-end;
  width: calc(100% - 474px);
`;
export const VideoContainer = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.hover};
`;
export const VideoInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const VideoInfoSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  font-weight: 500;
  color: ${({ theme }) => theme.buttonTextColor};
  .icon {
    padding: 6px;
    margin-left: 10px;
  }
`;
export const VideoInfo = styled.div`
  color: ${({ theme }) => theme.textSoft};
  font-size: 14px;
  line-height: 16px;
`;
export const Title = styled.div`
  font-size: 18px;
  color: ${({ theme }) => theme.text};
  line-height: 26px;
`;
export const Video = styled.div`
  width: 976px;
  height: 563px;
  background-color: black;
`;
export const Description = styled.div`
  display: block;
  border-bottom: 1px solid ${({ theme }) => theme.hover};
  padding: 20px 0 8px 0;
`;

export const About = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
`;
export const AboutChannel = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const AboutChannelImg = styled.div`
  width: 48px;
  height: 48px;
  background-color: grey;
  margin-right: 16px;
  border-radius: 50%;
`;
export const AboutChannelInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const Info = styled.div`
  font-weight: 500;
  color: ${({ theme }) => theme.text};
  line-height: 20px;
`;
export const SubButton = styled.div`
  background-color: #c00;
  color: white;
  border-radius: 2px;
  padding: 10px 16px;
  font-size: 14px;
  letter-spacing: 0.5px;
  font-weight: 500;
  width: fit-content;
`;

export const CommentsSection = styled.div``;
export const CommentInputContainer = styled.div``;
export const CommentsWrapper = styled.div``;
export const Comment = styled.div``;
export const CommentLeft = styled.div``;
export const CommentRight = styled.div``;
export const CommentRightInfo = styled.div``;
export const CommentText = styled.div``;
export const CommentActions = styled.div``;
export const UserImg = styled.div``;
export const Username = styled.div``;
export const Date = styled.div``;
