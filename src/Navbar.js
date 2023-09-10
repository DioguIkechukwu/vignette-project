const Navbar = () => {
  return (
    <div className="navBar">
      <div className="navMenu">
        <img
          className="navMain"
          src="/assets/navbar-icons/navMain.svg"
          alt=""
          srcset=""
        />
        <div className="socials">
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
        </div>
        <div className="navList">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Our Vision</li>
            <li>Our Team</li>
            <li>Sponsors</li>
            <li>Download</li>
            <li>Blog</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
