import React, { useState } from "react";
import {
  Container,
  Wrapper,
  SearchContainer,
  Input,
  SearchIconContainer,
  LogoSection,
  Logo,
  Img,
  UserImg,
} from "./NavbarElements";
import MenuIcon from "@mui/icons-material/Menu";
import { Button } from "../menu/MenuElements";
import LogoImg from "../../img/logo.svg";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import UserMenu from "../userMenu/UserMenu";
import { Link } from "react-router-dom";
const Navbar = ({ setOpenMenu, openMenu, darkMode, setDarkMode }) => {
  const [user, setUser] = useState(localStorage.getItem("user") || false);
  const [openSettings, setOpenSettings] = useState(false);

  const signIn = () => {
    localStorage.setItem("user", true);
    window.location.reload();
  };
  return (
    <Container>
      <Wrapper>
        <LogoSection>
          <MenuIcon onClick={() => setOpenMenu(!openMenu)} />
          <Logo onClick={() => window.location.replace("/youtubeClone-client")}>
            <Img src={LogoImg} alt="" />
            YouTube
          </Logo>
        </LogoSection>
        <SearchContainer>
          <Input placeholder="Search" />
          <SearchIconContainer>
            <SearchIcon />
          </SearchIconContainer>
        </SearchContainer>
        {user ? (
          <>
            <UserImg onClick={() => setOpenSettings(!openSettings)} />
            {openSettings && (
              <UserMenu
                setOpenSettings={setOpenSettings}
                darkMode={darkMode}
                setDarkMode={setDarkMode}
              />
            )}
          </>
        ) : (
          <Button onClick={() => signIn()}>
            <AccountCircleOutlinedIcon />
            SIGN IN
          </Button>
        )}
      </Wrapper>
    </Container>
  );
};

export default Navbar;
