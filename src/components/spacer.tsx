import React from 'react';

type SpacerProps = {
  size: string;
};

const Spacer: React.FC<SpacerProps> = ({ size }) => {
  return <div style={{ height: size }} />;
};

export default Spacer;
