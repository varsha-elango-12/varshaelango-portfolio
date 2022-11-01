import React, { useRef, useState } from "react";
import { BlackBg } from "../myJourney/styled";
import { ConnectFR, ConnectMain } from "./styled";

function Connect() {
  return (
    <BlackBg className="connect-bg">
      <ConnectMain>
        <ConnectFR>
          <p data-aos="fade-up">
            Email:{" "}
            <a
              href="mailto:varshaelango12@gmail.com"
              className="a1"
              target="_blank"
            >
              varshaelango12@gmail.com
            </a>
          </p>
          <p data-aos="fade-up" data-aos-delay="300">
            UK:<span> +44 7535243664</span>
          </p>
          <br />
          <br />
          <p data-aos="fade-up" data-aos-delay="400">
            MA UX Project blogs:
          </p>
          <p data-aos="fade-up" data-aos-delay="500">
            <a
              className="a2"
              href="https://blogs.varshaelango.com"
              target="_blank"
            >
              https://blogs.varshaelango.com
            </a>
          </p>
          <br />
          <br />
          <div className="sm-cont" data-aos="fade-up" data-aos-delay="600">
            <a
              href="https://www.linkedin.com/in/varsha-elango-383b7a126/"
              target="_blank"
            >
              <img src={require("../../assets/images/linkedin.png")} />
            </a>
            <a href=" https://www.behance.net/varshaelango" target="_blank">
              <img src={require("../../assets/images/behance.png")} />
            </a>
          </div>
        </ConnectFR>
        {/* <form ref={form} onSubmit={sendEmail}>
          <label>Any quick messages?</label>
          <textarea
            placeholder="Type here please."
            value={msg}
            onChange={(e) => {
              setmsg(e.target.value);
            }}
          ></textarea>
          {msgsent === false ? (
            <button type="submit">Send!</button>
          ) : (
            <p>Message sent successfully!</p>
          )}
        </form> */}
      </ConnectMain>
    </BlackBg>
  );
}

export default Connect;
