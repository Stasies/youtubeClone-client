import React, { useState } from "react";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import {
  Container,
  CommentLeft,
  CommentRight,
  CommentRightInfo,
  CommentText,
  CommentActions,
  Action,
  ReplyButton,
  UserImg,
  Username,
  Date,
  ViewReplies,
  RepliesContainer,
  Reply,
} from "./CommentElements";
const Comment = () => {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [showReplies, setShowReplies] = useState(false);
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
      <CommentLeft>
        <UserImg size="40px" />
      </CommentLeft>
      <CommentRight>
        <CommentRightInfo>
          <Username>User name</Username>
          <Date>4 days ago</Date>
        </CommentRightInfo>
        <CommentText>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          iure laborum a, delectus tempore sed saepe nulla debitis nobis ut
          nostrum corporis nihil cumque odio modi, praesentium cum repudiandae
          vitae.
        </CommentText>
        <CommentActions>
          {liked ? (
            <Action>
              <ThumbUpIcon
                className="icon"
                onClick={() => sendReaction("like")}
              />{" "}
              200
            </Action>
          ) : (
            <Action>
              <ThumbUpOffAltIcon
                className="icon"
                onClick={() => sendReaction("like")}
              />{" "}
              200
            </Action>
          )}
          {disliked ? (
            <Action>
              <ThumbDownIcon
                className="icon"
                onClick={() => sendReaction("dislike")}
              />
            </Action>
          ) : (
            <Action>
              <ThumbDownOffAltIcon
                className="icon"
                onClick={() => sendReaction("dislike")}
              />{" "}
            </Action>
          )}
          <ReplyButton>REPLY</ReplyButton>
        </CommentActions>
        {showReplies ? (
          <ViewReplies onClick={() => setShowReplies(false)}>
            <ArrowDropUpIcon />
            Hide replies
          </ViewReplies>
        ) : (
          <ViewReplies onClick={() => setShowReplies(true)}>
            <ArrowDropDownIcon />
            View 17 replies
          </ViewReplies>
        )}
        {showReplies && (
          <RepliesContainer>
            <Reply>
              <CommentLeft>
                <UserImg size="24px" />
              </CommentLeft>
              <CommentRight>
                <CommentRightInfo>
                  <Username>User name</Username>
                  <Date>4 days ago</Date>
                </CommentRightInfo>
                <CommentText>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Fugiat hic dolores provident qui distinctio quas expedita
                  alias aspernatur, cupiditate culpa libero ducimus adipisci non
                  quaerat illum reiciendis vel placeat quo.
                </CommentText>
                <CommentActions>
                  {liked ? (
                    <Action>
                      <ThumbUpIcon
                        className="icon"
                        onClick={() => sendReaction("like")}
                      />{" "}
                      210
                    </Action>
                  ) : (
                    <Action>
                      <ThumbUpOffAltIcon
                        className="icon"
                        onClick={() => sendReaction("like")}
                      />{" "}
                      210
                    </Action>
                  )}
                  {disliked ? (
                    <Action>
                      <ThumbDownIcon
                        className="icon"
                        onClick={() => sendReaction("dislike")}
                      />
                    </Action>
                  ) : (
                    <Action>
                      <ThumbDownOffAltIcon
                        className="icon"
                        onClick={() => sendReaction("dislike")}
                      />{" "}
                    </Action>
                  )}
                  <ReplyButton>REPLY</ReplyButton>
                </CommentActions>
              </CommentRight>
            </Reply>
            <Reply>
              <CommentLeft>
                <UserImg size="24px" />
              </CommentLeft>
              <CommentRight>
                <CommentRightInfo>
                  <Username>User name</Username>
                  <Date>4 days ago</Date>
                </CommentRightInfo>
                <CommentText>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                  placeat, harum obcaecati exercitationem praesentium nobis
                  soluta omnis enim quas vitae molestias reprehenderit
                  laudantium eius quis nisi sapiente reiciendis possimus quidem?
                  Iusto, error minima sapiente quisquam quae voluptatibus cum
                  vero obcaecati, odio ex, dolorem culpa harum consequuntur
                  itaque. Itaque dolorum ut quisquam, tempora rerum repellendus
                  corporis ipsum dolore ratione provident mollitia!
                </CommentText>
                <CommentActions>
                  {liked ? (
                    <Action>
                      <ThumbUpIcon
                        className="icon"
                        onClick={() => sendReaction("like")}
                      />{" "}
                      210
                    </Action>
                  ) : (
                    <Action>
                      <ThumbUpOffAltIcon
                        className="icon"
                        onClick={() => sendReaction("like")}
                      />{" "}
                      210
                    </Action>
                  )}
                  {disliked ? (
                    <Action>
                      <ThumbDownIcon
                        className="icon"
                        onClick={() => sendReaction("dislike")}
                      />
                    </Action>
                  ) : (
                    <Action>
                      <ThumbDownOffAltIcon
                        className="icon"
                        onClick={() => sendReaction("dislike")}
                      />{" "}
                    </Action>
                  )}
                  <ReplyButton>REPLY</ReplyButton>
                </CommentActions>
              </CommentRight>
            </Reply>
          </RepliesContainer>
        )}
      </CommentRight>
    </Container>
  );
};

export default Comment;
