import React, { Fragment } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Grid } from '@mui/material';
import { ContactContentContainer, StyledFormHeader } from './styledComponents';

export const ContactForm = () => (
  <Grid container>
    <Grid item={true} sm={6} xs={12}>
      <StyledFormHeader>Contact MTKC</StyledFormHeader>
      <Box
        autoComplete="off"
        component="form"
        noValidate
        sx={{
          '& .MuiTextField-root': { m: 1 },
          maxWidth: '100%',
          width: 500,
        }}
      >
        <div>
          <TextField
            id="outlined-required"
            label="first name"
            placeholder="first name"
            required
          />
          <TextField
            id="outlined-required"
            label="last name"
            placeholder="last name"
            required
          />
        </div>
        <div>
          <TextField
            fullWidth
            id="outlined-required"
            label="email"
            placeholder="email address"
            required
          />
        </div>
        <div>
          <TextField
            fullWidth
            id="outlined-multiline-static"
            label="message"
            multiline
            placeholder="Write your message here"
            rows={10}
          />
        </div>
        <Button  sx={{ ml: 1 }} variant="contained">
            Submit
        </Button>
      </Box>
    </Grid>
    <ContactContentContainer
      item={true}
      sm={6}
      xs={12}
    >
      <img src='./MTKClogo.png' />
    </ContactContentContainer>
  </Grid>
);
