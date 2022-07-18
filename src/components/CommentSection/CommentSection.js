import React, { useState } from "react";
import {
  CommentContainer,
  CommentInputContainer,
  Input,
  CommentWrapper,
  CommentLeft,
  CommentRight,
  CommentRightInfo,
  CommentText,
  CommentActions,
  UserImg,
  Username,
  Date,
  CommentsInfo,
  CommentsInfoButton,
  SelectMenu,
  Option,
} from "./CommentSectionElements";
import Comment from "../comment/Comment";
import SegmentIcon from "@mui/icons-material/Segment";

const CommentSection = () => {
  const [inputHeight, setInputHeight] = useState("20px");
  const [openMenu, setOpenMenu] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(1);
  const newHeight = (val) => {
    console.log(val);
  };
  console.log(selectedOrder);
  return (
    <CommentContainer>
      <CommentsInfo>
        445 Comments
        <CommentsInfoButton>
          <SegmentIcon onClick={() => setOpenMenu(!openMenu)} /> SORT BY
        </CommentsInfoButton>
      </CommentsInfo>
      {openMenu && (
        <SelectMenu>
          <Option
            className="active"
            onClick={(e) => setSelectedOrder(e.target.innerHTML)}
          >
            Top comments
          </Option>
          <Option onClick={(e) => setSelectedOrder(e.target.innerHTML)}>
            Newest first
          </Option>
        </SelectMenu>
      )}
      <CommentInputContainer>
        <UserImg></UserImg>
        <Input
          placeholder="Add a comment..."
          height={inputHeight}
          onScroll={(e) => setInputHeight(`${e.target.scrollHeight}px`)}
        />
      </CommentInputContainer>
      <CommentWrapper>
        <Comment />
        <Comment />
        <Comment />
      </CommentWrapper>
    </CommentContainer>
  );
};

export default CommentSection;
