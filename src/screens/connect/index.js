import React, { useRef, useState } from "react";
import { BlackBg } from "../myJourney/styled";
import { ConnectFR, ConnectMain } from "./styled";
import emailjs from "@emailjs/browser";

function Connect() {
  const form = useRef();
  const [msg, setmsg] = useState("");
  const [msgsent, setmsgsent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    if (msg.length <= 0 || msg === "") {
      alert("Please enter your comments");
    } else {
      const templateParams = {
        from_name: "unknown",
        message: msg,
      };

      emailjs
        .send(
          "service_re98x5a",
          "template_cs412w2",
          templateParams,
          "6BLJWNv8i-Mln55sy"
        )
        .then(
          (result) => {
            console.log(result.text);
            setmsgsent(true);
            setmsg("");
          },
          (error) => {
            console.log(error.text);
            alert("Something wrong...Please try after sometime");
          }
        );
    }
  };

  return (
    <BlackBg className="connect-bg">
      <ConnectMain>
        <ConnectFR>
          <p>UK: +44 7535243664</p>
          <p>India: +91 9597804800</p>
          <p>Email: varshaelango12@gmail.com</p>
        </ConnectFR>
        <form ref={form} onSubmit={sendEmail}>
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
        </form>
      </ConnectMain>
    </BlackBg>
  );
}

export default Connect;
