import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: ${(props) => props.fd};
  cursor: pointer;
  &.suggestions {
    margin-top: 12px;
    width: 100%;
    margin-bottom: 0;
  }
  &.homepage {
    align-items: space-between;
    /* margin-bottom: 24px; */
    margin-left: ${(props) => `calc(${props.mar}px / 2)}`};
    margin-right: ${(props) => `calc(${props.mar}px / 2)}`};
    margin-bottom: 40px;
    width: ${(props) =>
      `calc(100% / ${props.itemsPerRow} - ${props.mar}px - 0.01px)}`};
  }
`;
export const Wrapper = styled.div``;
export const Video = styled.div`
  background-color: grey;
  margin-right: 8px;
  &.video-suggestions {
    width: 168px;
    height: 94px;
  }
  &.video-homepage {
    width: 100%;
    height: 155px;
  }
`;
export const Description = styled.div`
  display: flex;
  &.desc-suggestions {
    flex-direction: column;
    max-width: 208px;
  }
  &.desc-homepage {
    flex-direction: row;
    padding-right: 24px;
    margin-top: 12px;
  }
`;
export const UserImg = styled.div`
  background-color: grey;
  border-radius: 50%;
  margin-right: 16px;
  height: 36px;
  width: 36px;
`;
export const VideoTitle = styled.h3`
  margin: 0 0 4px 0;
  display: block;
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  max-height: 4rem;
  overflow: hidden;
  display: block;
  -webkit-line-clamp: 2;
  display: box;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  white-space: normal;
  color: ${({ theme }) => theme.text};
`;
export const Username = styled.div``;
export const VideoInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
export const VideoInfo = styled.div`
  color: ${({ theme }) => theme.textSoft};
  font-size: 12px;
  line-height: 16px;
`;

export const Section = styled.div``;
