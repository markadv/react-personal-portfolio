import React from "react";
import { animated } from "react-spring";

const Menu = ({ isOpen, toggle, api, styles, animationConfig }) => {
  const handleClick = () => {
    api.start({
      to: isOpen
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
      className="flex h-10 w-10 flex-col items-end justify-between overflow-hidden border-none p-0"
      onClick={() => handleClick()}
    >
      <animated.div
        style={{ transform: styles.transformTop, width: styles.widthTop }}
        className="h-1 rounded-sm bg-accent"
      />
      <animated.div
        style={{ transform: styles.transformMiddle }}
        className="h-1 w-7 rounded-sm bg-accent"
      />
      <animated.div
        style={{
          transform: styles.transformBottom,
          width: styles.widthBottom,
        }}
        className="h-1 rounded-sm bg-accent"
      />
    </button>
  );
};

export default Menu;
