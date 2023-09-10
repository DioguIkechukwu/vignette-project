const Home = () => {
  const title = "Vignette";
  return (
    <div className="home">
      <div className="titleDiv">
        <h1 className="title"> {title} </h1>
        <p className="motto">Make your streams more virtual</p>
        <p className="headWriteUp">Free and Open Source</p>

        <button className="headBtn">Download</button>

        <div className="lowerHeader">
          <p>Learn More</p>

          <span>
            <i class="fa-solid fa-angle-down"></i>
          </span>
        </div>
      </div>
      <div className="bar"></div>
    </div>
  );
};

export default Home;
