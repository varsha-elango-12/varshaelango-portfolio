import React from "react";
import { motion } from "framer-motion";

function AnimatedTxt(props) {
  //   letter animation
  const item = {
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
    visible: {
      opacity: 1,
      y: 0,

      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
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
                      color: "#FF0088",
                      fontFamily: "PB",
                      fontSize: "clamp(11px, 1.1vw, 20px)",
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
