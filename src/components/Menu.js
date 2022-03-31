import React from "react";
import { animated } from "react-spring";

const Menu = ({ open, toggle, api, styles, animationConfig }) => {
  const handleClick = () => {
    api.start({
      to: open
        ? [
            {
              transformTop: "translate(-6px, 18.5px) rotate(0deg)",
              transformMiddle: "translate(-6px, 0px) rotate(0deg)",
              transformBottom: "translate(-6px, -18.5px) rotate(0deg)",
              widthTop: "28px",
              widthBottom: "28px",
              config: { clamp: true },
            },
            {
              transformTop: "translate(-6px, 10px) rotate(0deg)",
              transformMiddle: "translate(-6px, 0px) rotate(0deg)",
              transformBottom: "translate(-6px, -10px) rotate(0deg)",
              widthTop: "24px",
              widthBottom: "20px",
              config: {
                clamp: false,
                friction: animationConfig.frictionLight,
                tension: animationConfig.tension,
              },
              delay: animationConfig.delay,
            },
          ]
        : [
            {
              transformTop: "translate(-6px, 18.5px) rotate(0deg)",
              transformMiddle: "translate(-6px, 0px) rotate(0deg)",
              transformBottom: "translate(-6px, -18.5px) rotate(0deg)",
              widthTop: "28px",
              widthBottom: "28px",
              config: { clamp: true },
            },
            {
              transformTop: "translate(-6px, 18.5px) rotate(45deg)",
              transformMiddle: "translate(-6px, 0px) rotate(45deg)",
              transformBottom: "translate(-6px, -18.5px) rotate(-45deg)",
              widthTop: "28px",
              widthBottom: "28px",
              config: {
                clamp: false,
                friction: animationConfig.frictionLight,
                tension: animationConfig.tension,
              },
              delay: animationConfig.delay,
            },
          ],
    });
    toggle((prev) => !prev);
  };
  return (
    <button
      className="flex flex-col justify-between align-end items-end w-10 h-10 p-0 border-none overflow-hidden"
      onClick={() => handleClick()}
    >
      <animated.div
        style={{ transform: styles.transformTop, width: styles.widthTop }}
        className="h-1 bg-black rounded-sm"
      />
      <animated.div
        style={{ transform: styles.transformMiddle }}
        className="h-1 bg-black rounded-sm w-7"
      />
      <animated.div
        style={{
          transform: styles.transformBottom,
          width: styles.widthBottom,
        }}
        className="h-1 bg-black rounded-sm"
      />
    </button>
  );
};

export default Menu;
