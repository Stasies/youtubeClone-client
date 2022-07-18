import Menu from "../../components/menu/Menu";
import Navbar from "../../components/navbar/Navbar";
import {
  Container,
  Main,
  Wrapper,
  GlobalStyle,
  AllVideosContainer,
} from "./HomepageElements";
import CategoriesNavigation from "../../components/categoriesNavigation/CategoriesNavigation";
import SingleVideo from "../../components/SingleVideo/SingleVideo";
import { data } from "../../Data";
import { useState } from "react";
import { Link } from "react-router-dom";
const Homepage = ({ setDarkMode, darkMode }) => {
  return (
    <>
      <Wrapper>
        <Menu
          position="sticky"
          setDarkMode={setDarkMode}
          darkMode={darkMode}
          style={{ position: "sticky" }}
        />
        <Main>
          <CategoriesNavigation />
          <AllVideosContainer>
            {data.map((video) => (
              <SingleVideo
                type="homepage"
                key={video.id}
                title={video.title}
                id={video.id}
                channel={video.channel}
                date={video.date}
                views={video.views}
              />
            ))}
          </AllVideosContainer>
        </Main>
      </Wrapper>
    </>
  );
};

export default Homepage;
