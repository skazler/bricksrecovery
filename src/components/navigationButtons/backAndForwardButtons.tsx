import React from 'react';
import BackButton from './backButton';
import ForwardButton from './forwardButton';

const BackAndForwardButtons: React.FC = () => {

  return (
    <div className="flex justify-between w-full p-4">
      <BackButton />
      <ForwardButton />
    </div>
  );
};

export default BackAndForwardButtons;
