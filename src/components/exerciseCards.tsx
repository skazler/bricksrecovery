'use client';

import * as React from 'react';
import ExerciseCard from './exerciseCard';

type ExerciseCardsProps = {
  cards: string[];
  handleDelete: (card: string) => void;
};

const ExerciseCards: React.FC<ExerciseCardsProps> = ({
  cards,
  handleDelete
}) => {
  return (
    <div>
      {cards.map((card, index) => (
        <ExerciseCard key={index} card={card} handleDelete={handleDelete}/>
      ))}
    </div>
  );
};

export default ExerciseCards;
