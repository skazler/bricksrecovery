'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowForward } from '@mui/icons-material';

const ForwardButton: React.FC = () => {
  const router = useRouter();

  const handleBackClick = () => {
    router.forward();
  };

  return (
    <ArrowForward
      onClick={handleBackClick}
      sx={{
        fontSize: 36,
        cursor: 'pointer',
        strokeWidth: 2,
        stroke: 'currentColor',
        '&:hover': { color: 'gray'}
      }}
    />
  );
};

export default ForwardButton;
