import React from "react";
import { Container, Wrapper } from "./SuggestionsElements";
import SingleVideo from "../SingleVideo/SingleVideo";
import { data } from "../../Data";

const Suggestions = () => {
  return (
    <Container>
      <Wrapper>
        {data.map((video) => (
          <SingleVideo
            type="suggestions"
            key={video.id}
            title={video.title}
            id={video.id}
            channel={video.channel}
            date={video.date}
            views={video.views}
          />
        ))}
      </Wrapper>
    </Container>
  );
};

export default Suggestions;
