'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const BackButton: React.FC = () => {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  return (
    <ArrowBackIcon
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

export default BackButton;
