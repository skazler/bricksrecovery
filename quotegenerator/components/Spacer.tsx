import React from "react";

interface SpacerProps {
  height: number; // spacer height in pixels
}

const Spacer: React.FC<SpacerProps> = ({ height }) => {
  return <div style={{ height: `${height}px` }} />;
};

export default Spacer;
