import React from "react";
import {
  Container,
  Account,
  UserImg,
  UserInfo,
  Username,
  Settings,
  MenuItemWrapper,
  MenuItem,
} from "./UserMenuElements";
import PortraitIcon from "@mui/icons-material/Portrait";
import PaidIcon from "@mui/icons-material/Paid";
import SwitchAccountIcon from "@mui/icons-material/SwitchAccount";
import LogoutIcon from "@mui/icons-material/Logout";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";
import LightModeIcon from "@mui/icons-material/LightMode";
import TranslateIcon from "@mui/icons-material/Translate";
// import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import FeedbackIcon from "@mui/icons-material/Feedback";
import { useState } from "react";
const UserMenu = ({ setOpenSettings, darkMode, setDarkMode }) => {
  const signOut = () => {
    localStorage.setItem("user", false);
    window.location.reload();
  };
  const changeDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      localStorage.setItem("darkmode", "light");
    } else {
      localStorage.setItem("darkmode", "dark");
    }
  };
  return (
    <Container onClick={() => setOpenSettings(false)}>
      <Account>
        <UserImg />
        <UserInfo>
          <Username> User Name</Username>
          <Settings> Manage your Google Account</Settings>
        </UserInfo>
      </Account>
      <MenuItemWrapper>
        <MenuItem>
          {" "}
          <PortraitIcon />
          Your channel
        </MenuItem>
        <MenuItem>
          {" "}
          <PaidIcon />
          Purchases and memberships
        </MenuItem>
        <MenuItem>
          <SwitchAccountIcon />
          Switch account
        </MenuItem>
        <MenuItem onClick={signOut}>
          <LogoutIcon />
          Sign out
        </MenuItem>
        <MenuItem onClick={() => changeDarkMode()}>
          <NightlightRoundIcon />
          Appearance: {darkMode ? "Dark" : "Light"}
        </MenuItem>
        <MenuItem>
          <TranslateIcon />
          Language: English
        </MenuItem>
        <MenuItem>
          <SettingsIcon />
          Settings
        </MenuItem>
        <MenuItem>
          <HelpOutlineIcon />
          Help
        </MenuItem>
        <MenuItem>
          <FeedbackIcon />
          Send feedback
        </MenuItem>
      </MenuItemWrapper>
    </Container>
  );
};

export default UserMenu;
