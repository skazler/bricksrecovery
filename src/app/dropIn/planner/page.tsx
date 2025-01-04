'use client';

import * as React from 'react';
import BackAndForwardButtons from "@/components/navigationButtons/backAndForwardButtons";
import Spacer from "@/components/spacer";
import AddExercise from '@/components/addExercise';
import ExerciseCards from '@/components/exerciseCards';

export default function PlannerPage() {
  const [open, setOpen] = React.useState(false);
  const [inputValue, setInputValue] = React.useState('');
  const [contents, setContents] = React.useState<string[]>([]);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setInputValue('');
  };

  const handleAddContent = () => {
    if (inputValue.trim() !== '') {
      setContents((prevArray) => [...prevArray, inputValue.trim()]);
      setInputValue('');
      handleClose();
    }
  };
  const handleDelete = (card: string) => {
    setContents((prevContents) => prevContents.filter(item => item !== card));
  };

  return (
    <div
      className="flex flex-col h-screen justify-between"
      style={{
        fontFamily: 'var(--font-geist-mono)',
        margin: '20px',
        padding: '20px',
        maxWidth: '800px',
        lineHeight: '1.6',
      }}
    >
      <div className="flex-grow">
        <h1 style={{ fontSize: 23 }}>Planner</h1>
        <Spacer size="20px" />

        <main className="flex flex-col items-center sm:items-start">
          <AddExercise 
            open={open}
            inputValue={inputValue}
            setInputValue={setInputValue}
            handleClickOpen={handleClickOpen}
            handleClose={handleClose}
            handleAddContent={handleAddContent}
          />
        </main>
        <Spacer size="20px" />

        <main>
          <ExerciseCards cards={contents} handleDelete={handleDelete}/>
        </main>
        <Spacer size="20px" />
      </div>

      <div className="p-4">
        <BackAndForwardButtons />
      </div>
    </div>
  );
}
