import React, { useState } from 'react';
import { TextField, Button, Grid, Box, Typography, Container, createTheme, ThemeProvider } from '@mui/material';

const defaultTheme = createTheme();

export default function FormComponent({ formValues, onFormChange, onSubmit }) {
  const [imagePreview, setImagePreview] = useState(formValues.image || '');

  const isFormValid = () => {
    return formValues.image && formValues.title && formValues.rank && formValues.author && formValues.price_eth && formValues.price_usd;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    onFormChange(name, value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        onFormChange('image', reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            {formValues.id ? 'Edit NFT' : 'Add NFT'}
          </Typography>
          <Box component="form" noValidate onSubmit={onSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <input
                  accept="image/*"
                  type="file"
                  id="image"
                  name="image"
                  style={{ display: 'none' }}
                  onChange={handleImageChange}
                />
                <label htmlFor="image">
                  <Button variant="contained" component="span">
                    Upload Image
                  </Button>
                </label>
                {imagePreview && (
                  <Box mt={2} textAlign="center">
                    <img src={imagePreview} alt="Image Preview" width="100%" />
                  </Box>
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="title"
                  label="Title"
                  name="title"
                  value={formValues.title}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="rank"
                  label="Rank"
                  name="rank"
                  value={formValues.rank}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="author"
                  label="Author"
                  name="author"
                  value={formValues.author}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="price_eth"
                  label="Price (ETH)"
                  name="price_eth"
                  value={formValues.price_eth}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="price_usd"
                  label="Price (USD)"
                  name="price_usd"
                  value={formValues.price_usd}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={!isFormValid()}
            >
              {formValues.id ? 'Update NFT' : 'Add NFT'}
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
