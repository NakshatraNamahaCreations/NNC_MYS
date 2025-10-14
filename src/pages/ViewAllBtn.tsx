"use client";

import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

export interface ViewAllBtnProps {
  onClick: () => void;
  disabled?: boolean;     // <-- add this
  className?: string;
}

export default function ViewAllBtn({ onClick, disabled = false, className = "" }: ViewAllBtnProps) {
  const [hovered, setHovered] = useState(false);

  const springProps = useSpring({
    transform: hovered ? "scale(1.1)" : "scale(1)",
    opacity: hovered ? 1 : 0.9,
    config: { tension: 300, friction: 20 },
  });

  return (
    <animated.div style={springProps} className={className}>
      <Button
        variant="outline-dark"
        disabled={disabled}               // <-- forward it
        className="popout-animation hover-button"
        style={{
          borderRadius: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          padding: "3px 15px",
          fontWeight: 500,
          letterSpacing: "1px",
          fontSize: "15px",
          justifySelf: "center",
          boxShadow: "2px 2px 1px 0px rgb(0, 0, 0)",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={onClick}
      >
        View More{" "}
        <FontAwesomeIcon icon={faArrowRightLong} style={{ color: "#000000" }} className="hover-icon" />
      </Button>
    </animated.div>
  );
}
