import React, { useState } from "react";
import { useEffect } from "react";
import {
  Container,
  Wrapper,
  Video,
  Description,
  VideoTitle,
  VideoInfo,
  VideoInfoContainer,
  UserImg,
  Section,
} from "./SingleVideoElements";

const SingleVideo = ({ type, title, channel, views, date, id }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    function updateWidth() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", updateWidth);
    updateWidth();
  }, []);

  return (
    <Container
      onClick={() =>
        window.location.replace(`/youtubeClone-client/watch/${id}`)
      }
      mar="16"
      itemsPerRow={
        windowWidth <= 512
          ? "1"
          : windowWidth <= 862
          ? "2"
          : windowWidth <= 1130
          ? "3"
          : "4"
      }
      // itemsPerRow={windowWidth >= 1130 ? "4" : windowWidth <= 862 ? "2" : "3"}
      fd={type == "suggestions" ? "row" : "column"}
      className={type == "suggestions" ? "suggestions" : "homepage"}
    >
      <Video
        className={
          type == "suggestions" ? "video-suggestions" : "video-homepage"
        }
      ></Video>
      {type === "suggestions" && (
        <Description className="desc-suggestions">
          <VideoTitle>
            {title.length > 100 ? `${title.substring(0, 100)}...` : title}
          </VideoTitle>
          <VideoInfo>{channel}</VideoInfo>
          <VideoInfoContainer>
            <VideoInfo>{views} views </VideoInfo>
            <VideoInfo style={{ fontSize: "6px", margin: "0 4px" }}>
              {" "}
              &#9679;
            </VideoInfo>
            <VideoInfo>{date}</VideoInfo>
          </VideoInfoContainer>
        </Description>
      )}
      {type === "homepage" && (
        <Description className="desc-homepage">
          <Section>
            <UserImg height="40px" width="40px" />
          </Section>
          <Section>
            <VideoTitle>{title}</VideoTitle>
            <VideoInfo>{channel}</VideoInfo>
            <VideoInfoContainer>
              <VideoInfo>{views} views </VideoInfo>
              <VideoInfo style={{ fontSize: "6px", margin: "0 4px" }}>
                {" "}
                &#9679;
              </VideoInfo>
              <VideoInfo> {date}</VideoInfo>
            </VideoInfoContainer>
          </Section>
        </Description>
      )}
    </Container>
  );
};

export default SingleVideo;
