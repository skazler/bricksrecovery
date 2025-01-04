'use client';

import * as React from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import CancelIcon from '@mui/icons-material/Cancel';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Button } from '@mui/material';

type AddExerciseProps = {
  open: boolean;
  inputValue: string;
  setInputValue: (value: string) => void;
  handleClickOpen: () => void;
  handleClose: () => void;
  handleAddContent: () => void;
};

const AddExercise: React.FC<AddExerciseProps> = ({
  open,
  inputValue,
  setInputValue,
  handleClickOpen,
  handleClose,
  handleAddContent
}) => {
  return (
    <React.Fragment>
      <AddCircleIcon
        sx={{
          fontSize: 48,
          cursor: 'pointer',
          '&:hover': { color: 'gray' },
        }}
        onClick={handleClickOpen}
      />
      <p>Add exercise</p>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Add exercise</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            fullWidth
            variant="standard"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            sx={{
              '& .MuiInput-underline:before': {
                borderBottomColor: 'black',
              },
              '& .MuiInput-underline:after': {
                borderBottomColor: 'black',
              },
              '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                borderBottomColor: 'black',
              },
            }}
          />
        </DialogContent>
        <DialogActions>
          <div className="flex justify-between w-full p-4">
            <Button onClick={handleClose}>
              <CancelIcon
                sx={{ color: '#ed4337', fontSize: 40 }}
              />
            </Button>
            <Button onClick={handleAddContent}>
              <LibraryAddIcon
                sx={{ color: '#2e6f40', fontSize: 40 }}
              />
            </Button>
          </div>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default AddExercise;
