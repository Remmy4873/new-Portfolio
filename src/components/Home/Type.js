import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
    options={{
      strings: [
        "Welcome to my little corner of the web...",
        "Stay a while, explore, and connect with me.",
      ],
      autoStart: true,
      loop: true,
      deleteSpeed: 50,
    }}
  />
  );
}

export default Type;
