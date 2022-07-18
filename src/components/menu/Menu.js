import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

import {
  Container,
  Wrapper,
  LogoSection,
  Logo,
  Img,
  Item,
  Hr,
  Title,
  Button,
  Login,
  ChannelIcon,
} from "./MenuElements";
import { Link } from "react-router-dom";
import LogoImg from "../../img/logo.svg";
const Menu = ({ darkMode, setDarkMode, position, transform, width }) => {
  const [user, setUser] = useState(localStorage.getItem("user") || false);

  console.log(position);
  return (
    <Container position={position} transform={transform} width={width}>
      <LogoSection>
        <MenuIcon />
        <Logo>
          <Img src={LogoImg} alt="" />
          YouTube
        </Logo>
      </LogoSection>
      <Wrapper>
        <Item>
          <HomeIcon />
          Home
        </Item>
        <Item>
          <ExploreOutlinedIcon />
          Explore
        </Item>
        <Item>
          <SubscriptionsOutlinedIcon />
          Subscriptions
        </Item>
        <Hr />
        <Item>
          <VideoLibraryOutlinedIcon />
          Library
        </Item>
        <Item>
          <HistoryOutlinedIcon />
          History
        </Item>
        <Item>
          <AccessTimeIcon />
          Watch later
        </Item>
        <Item>
          <ThumbUpOffAltIcon />
          Liked videos
        </Item>
        <Hr />
        {user ? (
          <>
            <Title>SUBSCRIPTIONS</Title>
            <Item>
              <ChannelIcon></ChannelIcon>
              channel
            </Item>
            <Item>
              <ChannelIcon></ChannelIcon>
              another channel
            </Item>
            <Item>
              <ChannelIcon></ChannelIcon>
              channel
            </Item>
            <Item>
              <ChannelIcon></ChannelIcon>
              another channel
            </Item>
            <Item>
              <ChannelIcon></ChannelIcon>
              some channel
            </Item>
            <Item>
              <ChannelIcon></ChannelIcon>
              channel
            </Item>
          </>
        ) : (
          <Login>
            Sign in to like videos, comment, and subscribe.
            <Button>
              <AccountCircleOutlinedIcon />
              SIGN IN
            </Button>
          </Login>
        )}
        <Hr />
        <Title>MORE FROM YOUTUBE</Title>
        <Item>
          <LibraryMusicOutlinedIcon />
          Music
        </Item>
        <Item>
          <SportsBasketballOutlinedIcon />
          Sports
        </Item>
        <Item>
          <SportsEsportsOutlinedIcon />
          Gaming
        </Item>
        <Item>
          <MovieOutlinedIcon />
          Movies
        </Item>
        <Item>
          <ArticleOutlinedIcon />
          News
        </Item>
        <Item>
          <LiveTvOutlinedIcon />
          Live
        </Item>
        <Hr />
        <Item>
          <SettingsOutlinedIcon />
          Settings
        </Item>
        <Item>
          <FlagOutlinedIcon />
          Report
        </Item>
        <Item>
          <HelpOutlineOutlinedIcon />
          Help
        </Item>
        <Item>
          <ChatBubbleOutlineIcon />
          Send feedback
        </Item>
      </Wrapper>
    </Container>
  );
};

export default Menu;
