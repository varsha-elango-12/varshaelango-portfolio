import React, { useRef, useState } from "react";
import { BlackBg } from "../myJourney/styled";
import { ConnectFR, ConnectMain } from "./styled";

function Connect() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("varshaelango12@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <BlackBg className="connect-bg">
      <ConnectMain>
        <ConnectFR>
          <p data-aos="fade-up">
            Email:{" "}
            <span className="email-value">
              <button
                type="button"
                onClick={handleCopy}
                className="a1"
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  font: "inherit",
                  color: "inherit",
                  textDecoration: "underline",
                }}
              >
                varshaelango12@gmail.com
              </button>

              {copied && (
                <span className="copied-message" role="status">
                  Copied to clipboard!
                </span>
              )}
            </span>
          </p>
          <p data-aos="fade-up" data-aos-delay="300">
            Phone:<span>+44-7535243664</span>
          </p>
          <br />
          <br />
          <p data-aos="fade-up" data-aos-delay="400">
            Design Blogs
          </p>
          <p data-aos="fade-up" data-aos-delay="500">
            <a
              className="a2"
              href="https://varshaelango.com/blogs"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "underline",
                cursor: "pointer",
                color: "#F24976", // or specify your theme accent color
                position: "relative",
                zIndex: 1, // Ensures no invisible container overlaps and blocks clicks
              }}
            >
              https://varshaelango.com/blogs
            </a>
          </p>
          <br />
          <br />
          <div className="sm-cont" data-aos="fade-up" data-aos-delay="600">
            <a
              href="https://www.linkedin.com/in/varsha-elango/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={require("../../assets/images/linkedin.png")} alt="LinkedIn" />
            </a>
            <a
              href="https://www.behance.net/varshaelango"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={require("../../assets/images/behance.png")} alt="Behance" />
            </a>
            <a
              href="https://substack.com/@vacchu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={require("../../assets/images/substack.png")} alt="Substack" />
            </a>
          </div>
        </ConnectFR>
      </ConnectMain>
    </BlackBg>
  );
}

export default Connect;