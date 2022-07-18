import React, { useState } from "react";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ReplyIcon from "@mui/icons-material/Reply";
import AddIcon from "@mui/icons-material/Add";
import {
  Container,
  VideoInfoContainer,
  VideoInfo,
  VideoInfoSection,
  VideoContainer,
  Video,
  Description,
  Title,
  About,
  AboutChannel,
  AboutChannelImg,
  AboutChannelInfo,
  Info,
  SubButton,
} from "./VideoSectionElements";
import CommentSection from "../CommentSection/CommentSection";
const VideoSection = () => {
  const [reaction, setReaction] = useState(false);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const sendReaction = (val) => {
    if (val === "like") {
      setLiked(!liked);
      if (disliked) {
        setDisliked(!disliked);
      }
    } else {
      setDisliked(!disliked);
      if (liked) {
        setLiked(!liked);
      }
    }
  };

  return (
    <Container>
      <VideoContainer>
        <Video />
        <Description>
          <Title>pov: she asked her friend to pose for a pic</Title>
          <VideoInfoContainer>
            <VideoInfoSection>
              <VideoInfo>127,230 views </VideoInfo>
              <VideoInfo> &#9679; </VideoInfo>
              <VideoInfo>Jul 6, 2022</VideoInfo>
            </VideoInfoSection>
            <VideoInfoSection>
              {liked ? (
                <>
                  <ThumbUpIcon
                    className="icon"
                    onClick={() => sendReaction("like")}
                  />{" "}
                  LIKE
                </>
              ) : (
                <>
                  <ThumbUpOffAltIcon
                    className="icon"
                    onClick={() => sendReaction("like")}
                  />{" "}
                  LIKE
                </>
              )}
              {disliked ? (
                <>
                  <ThumbDownIcon
                    className="icon"
                    onClick={() => sendReaction("dislike")}
                  />
                  DISLIKE
                </>
              ) : (
                <>
                  <ThumbDownOffAltIcon
                    className="icon"
                    onClick={() => sendReaction("dislike")}
                  />{" "}
                  DISLIKE
                </>
              )}
              <ReplyIcon className="icon" /> SHARE
              <AddIcon className="icon" /> SAVE
            </VideoInfoSection>
          </VideoInfoContainer>
        </Description>
        <About>
          <AboutChannel>
            <AboutChannelImg></AboutChannelImg>
            <AboutChannelInfo>
              <Info>A channel</Info>
              <VideoInfo style={{ fontSize: "12px" }}>
                234 subscribers
              </VideoInfo>
            </AboutChannelInfo>
          </AboutChannel>
          <SubButton>SUBSCRIBE</SubButton>
        </About>
      </VideoContainer>
      <CommentSection />
      {/* <CommentsSection>
        <CommentInputContainer></CommentInputContainer>
        <CommentsWrapper>
          <Comment>
            <CommentLeft>
              <UserImg />
            </CommentLeft>
            <CommentRight>
              <CommentRightInfo>
                <Username>User name</Username>
                <Date>4 days ago</Date>
              </CommentRightInfo>
              <CommentText>
                Hi, thanks for your hard work and dedication, it would be nice
                to have a MERN stack for the backend and AWS as a file storage.
                Thanks so much
              </CommentText>
              <CommentActions></CommentActions>
            </CommentRight>
          </Comment>
        </CommentsWrapper>
      </CommentsSection> */}
    </Container>
  );
};

export default VideoSection;
