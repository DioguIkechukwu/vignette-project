import React from "react";
import { NavBarContainer, Wrapper, Socials, NavList } from "./style";

const Navbar = () => {
  return (
    <NavBarContainer>
      <Wrapper>
        <img
          className="logo"
          src="/assets/navbar-icons/navMain.svg"
          alt=""
          srcset=""
        />
        <Socials>
          <img
            className="socialIcons"
            src="/assets/navbar-icons/navTweet.svg"
            alt=""
          />
          <img
            className="socialIcons"
            src="/assets/navbar-icons/navDiscord.svg"
            alt=""
          />
          <img
            className="socialIcons"
            src="/assets/navbar-icons/navGit.svg"
            alt=""
          />
          <img
            className="socialIcons"
            src="/assets/navbar-icons/navCircle.svg"
            alt=""
          />
        </Socials>
        <NavList>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Our Vision</li>
            <li>Our Team</li>
            <li>Sponsors</li>
            <li>Download</li>
            <li>Blog</li>
          </ul>
        </NavList>
      </Wrapper>
    </NavBarContainer>
  );
};

export default Navbar;
