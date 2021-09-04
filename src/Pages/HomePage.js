import React from "react";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="HomePage">
      <header className="hero">
        <h1 className="hero-text">
          Hi, I am
          <span> Manav Desai.</span>
        </h1>
        <p className="h-sub-text">
          I am a full stack web developer and a computer science grad student at
          Indian Institute of Information Technology, Jabalpur. I have a good
          enough knowledge of MERN stack. I love problem solving and playing
          games. In a nutshell, I sit all day long in front of my lappy creating
          and destroying stuff.
        </p>
        <div className="icons">
          <Link
            to={{
              pathname: "https://www.instagram.com/the_manavdesai",
            }}
            target="_blank"
            className="icon-holder"
          >
            <FontAwesomeIcon icon={faInstagram} className="icon fb" />
          </Link>
          <Link
            to={{
              pathname: "https://github.com/manavdesai27",
            }}
            target="_blank"
            className="icon-holder"
          >
            <FontAwesomeIcon icon={faGithub} className="icon gh" />
          </Link>
          <Link
            to={{
              pathname: "https://www.linkedin.com/in/manav-desai-819487200/",
            }}
            target="_blank"
            className="icon-holder"
          >
            <FontAwesomeIcon icon={faLinkedin} className="icon yt" />
          </Link>
        </div>
      </header>
    </div>
  );
}

export default HomePage;
