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
      <div className='flex space-x-10'>
      <TextField
        label="Adult (12+ years)"
        variant="outlined"
        fullWidth
        margin="normal"
        className='w-32'
      />
      <TextField
        label="Infants (0 to 2 years)"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      </div>
      <div className='flex space-x-10'>
      <TextField
        label="Child (2 to 12 years)"
        variant="outlined"
        fullWidth
        margin="normal"
        className='w-32'
      />
      <TextField
        label="Total Person"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      </div>
      <div className='flex space-x-10'>
      <TextField
        label="Personal Care"
        variant="outlined"
        fullWidth
        margin="normal"
        className='w-32'
      />
     <div className='flex w-full space-x-10'>
     <TextField
        label="Travel Days"
        variant="outlined"
        fullWidth
        margin="normal"
      />
       <TextField
        label="Total Days"
        variant="outlined"
        fullWidth
        margin="normal"
      />
       <TextField
        label="Total Night"
        variant="outlined"
        fullWidth
        margin="normal"
      />
     </div>
      </div>
      <div className='flex space-x-10'>
      <TextField
        label="Destination Category"
        variant="outlined"
        fullWidth
        margin="normal"
        className='w-32'
      />
     <div className='flex w-full space-x-10'>
     <TextField
        label="Hotel Type"
        variant="outlined"
        fullWidth
        margin="normal"
      />
       <TextField
        label="Package Type"
        variant="outlined"
        fullWidth
        margin="normal"
      />
     </div>
      </div>
      <div className='flex space-x-10'>
      <div className='flex w-full space-x-10'>
     <TextField
        label="Meal Type"
        variant="outlined"
        fullWidth
        margin="normal"
      />
       <TextField
        label=""
        variant="outlined"
        fullWidth
        margin="normal"
      />
     </div>
     <div className='flex w-full space-x-10'>
     <TextField
        label="Meals Required"
        variant="outlined"
        fullWidth
        margin="normal"
      />
       <TextField
        label=""
        variant="outlined"
        fullWidth
        margin="normal"
      />
     </div>
      </div>
      <div className='flex space-x-10'>
      <TextField
        label="Approx Departure Between"
        variant="outlined"
        fullWidth
        margin="normal"
        className='w-32'
      />
      <div className='flex w-full space-x-10'>
     <TextField
        label="Travel By"
        variant="outlined"
        fullWidth
        margin="normal"
      />
       <TextField
        label=""
        variant="outlined"
        fullWidth
        margin="normal"
      />
     </div>
      </div>
      <div className='flex space-x-10'>
      <textarea name="Other Requirement" id="Other Requirement" placeholder='Other Requirement' className='w-full rounded-md p-2 border-2 h-28 mt-5'></textarea>
      <TextField
        label="Other Services By Agency"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      </div>
      <Button variant="contained" color="primary" style={{ marginTop: "10px" }} >
        save
      </Button>
      </div>
    </Box>
  );
};

export default Form;