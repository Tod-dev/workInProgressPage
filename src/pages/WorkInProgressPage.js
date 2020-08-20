import React, { useEffect, useState } from "react";

import "./WorkInProgressPage.css";
import logo from "../images/logo.png";
import work from "../images/work.png";
import github from "../images/github.png";
import ig from "../images/instagram.png";
import linkedin from "../images/linkedin.png";
import Icon from "../components/Icon";

const WorkInProgressPage = () => {
  //console.log(document.body.offsetWidth);
  const [width, setWidth] = useState(document.body.offsetWidth);
  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);
    return () => window.removeEventListener("resize", updateWidthAndHeight);
  });
  const style = {
    iconSize: width < 500 ? "10vw" : "5vw",
  };
  return (
    <div className="Colonna fullSpace centered">
      <img
        src={work}
        alt="work in progress"
        className="rotate responsiveImg"
        style={{
          width: "20vw",
          position: "absolute",
          top: width < 500 ? "80vw" : width < 700 ? "30vw" : "10vw",
        }}
      />
      <img src={logo} alt="That's my logo" className="responsiveImg" />

      <p className="App-description">
        My portfolio is currently under development
      </p>

      <div
        className="Riga"
        style={{
          width: "80%",
          justifyContent: "space-around",
          marginTop: "20px",
        }}
      >
        <Icon
          name="gitHub"
          imageUrl={github}
          link="https://github.com/Tod-dev"
          style={{ width: style.iconSize, height: style.iconSize }}
        />
        <Icon
          name="Instagram"
          imageUrl={ig}
          link="https://www.instagram.com/marc0todar0/"
          style={{ width: style.iconSize, height: style.iconSize }}
        />
        <Icon
          name="linkedin"
          imageUrl={linkedin}
          link="https://www.linkedin.com/in/marco-todaro-155bb5195/"
          style={{ width: style.iconSize, height: style.iconSize }}
        />
      </div>
    </div>
  );
};

export default WorkInProgressPage;
