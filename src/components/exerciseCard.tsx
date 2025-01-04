'use client';

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Spacer from './spacer';
import DeleteIcon from '@mui/icons-material/Delete';
import TaskIcon from '@mui/icons-material/Task';
import Confetti from 'react-confetti';

type ExerciseCardProps = {
  card: string;
  handleDelete: (card: string) => void;
};

const ExerciseCard: React.FC<ExerciseCardProps> = ({ 
  card,
  handleDelete
}) => {
  const [celebrate, setCelebrate] = React.useState(false);

  const handleCelebrate = () => {
    handleDelete(card);
    setCelebrate(true);
    setTimeout(() => setCelebrate(false), 1000);
  };

  return (
    <div style={{ position: 'relative' }}>
      {celebrate && (
        <Confetti
        width={window.innerWidth}
        height={window.innerHeight}
        numberOfPieces={100}
        gravity={0.3}
        initialVelocityX={10}
        initialVelocityY={10} 
        recycle={false}
        style={{ position: 'absolute', top: 0, left: 0 }}
        />
      )}
      
      <Card>
        <CardContent>
          <Typography>
            {card}
          </Typography>
        </CardContent>
        <CardActions>
          <div className="flex justify-between w-full p-4">
            <Button onClick={() => handleDelete(card)}>
              <DeleteIcon sx={{ color: '#ed4337', fontSize: 30 }} />
            </Button>
            <Button onClick={handleCelebrate}>
              <TaskIcon sx={{ color: '#2e6f40', fontSize: 30 }} />
            </Button>
          </div>
        </CardActions>
      </Card>
      <Spacer size="15px" />
    </div>
  );
};

export default ExerciseCard;
