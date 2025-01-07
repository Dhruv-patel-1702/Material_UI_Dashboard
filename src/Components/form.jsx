import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

const Form = () => {
  return (
    <Box padding={2}>
      <Typography variant="h4" gutterBottom>
      Ahmedabad To goa
      </Typography>
      <div className='w-full'>
      <div className='flex space-x-10'>
      <TextField
        label="Package Name"
        variant="outlined"
        fullWidth
        margin="normal"
        className='w-32'
      />
      <TextField
        label="Package Type"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      </div>
      <TextField
        label="Budget"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" style={{ marginTop: "10px" }}>
        Submit
      </Button>
      </div>
    </Box>
  );
};

export default Form;