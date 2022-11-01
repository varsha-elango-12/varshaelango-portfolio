import React from "react";
import { motion } from "framer-motion";

function AnimatedTxt(props) {
  //   letter animation
  const item = {
    hidden: {
      opacity: 0,
      transform: {
        scale: 0,
      },
      x: 20,
      transition: {
        damping: 42,
      },
    },
    visible: {
      opacity: 1,
      x: 0,
      transform: {
        scale: 1,
      },
      transition: {
        damping: 42,
      },
    },
  };

  //  Split each word of props.text into an array
  const splitWords = props.words.split(" ");

  // Create storage array
  const words = [];

  // Push each word into words array
  for (const [, item] of splitWords.entries()) {
    words.push(item.split(""));
  }

  // Add a space ("\u00A0") to the end of each word
  words.map((word) => {
    return word.push("\u00A0");
  });

  return (
    <>
      {words.map((word, index) => {
        return (
          <span style={{ whiteSpace: "nowrap" }} key={index}>
            {words[index].flat().map((element, ind) => {
              return (
                <span
                  style={{
                    overflow: "hidden",
                    display: "inline-block",
                  }}
                  key={ind}
                >
                  <motion.p
                    style={{
                      display: "inline-block",
                      color: "#F24976",
                      fontFamily: "PB",
                      fontSize: "clamp(12px, 1.1vw, 20px)",
                    }}
                    variants={item}
                  >
                    {element}
                  </motion.p>
                </span>
              );
            })}
          </span>
        );
      })}
    </>
  );
}

export default AnimatedTxt;
