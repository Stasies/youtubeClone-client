import VideoSection from "../../components/videoSection/VideoSection";
import Suggestions from "../../components/suggestions/Suggestions";
import { Container } from "./VideopageElements";
import Menu from "../../components/menu/Menu";
import { useState } from "react";

const Videopage = ({ openMenu, setOpenMenu, darkMode, setDarkMode }) => {
  return (
    <>
      <Container>
        <Menu
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          position="fixed"
          width="240px"
          transform={openMenu ? "translateX(0px)" : "translateX(-240px)"}
          // left={openMenu ? -240px}
          style={{
            zIndex: "2",
            width: "240px",
            top: "0",
          }}
        />

        <VideoSection />
        <Suggestions />
      </Container>
    </>
  );
};

export default Videopage;
