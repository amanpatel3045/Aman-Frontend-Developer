import React from "react";

const Poster = () => {
  const posterDesign = {
    width: "100%",
    height: "600px",
    backgroundImage:
      "url(https://sxcontent9668.azureedge.us/cms-assets/assets/SWOT_Homepage_Launch_Tile_DESKTOP_36ea0a3735.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
    border: "1px solid black",
  };

  const content = {
    marginTop: "180px",
    marginLeft: "70px",
    width: "30%",
    height: "200px",
  };

  const Button = {
    backgroundColor: "transparent",
    color: "white",
    border: "1px solid white",
    width: "200px",
    height: "40px",
  };

  return (
    <div style={posterDesign}>
      <div style={content}>
        <p>UPCOMING LAUNCH</p>
        <h1>NASA’S SWOT MISSION</h1>

        <button style={Button}>Learn More</button>
      </div>
    </div>
  );
};

export default Poster;
