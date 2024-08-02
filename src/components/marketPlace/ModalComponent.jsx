import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import axios from 'axios';
import FormComponent from './FormComponent';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  maxHeight: '80vh',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
  overflowY: 'auto'
};

export default function ModalComponent({ onNftAdded, selectedNft, onNftUpdated }) {
  const [open, setOpen] = useState(false);
  const [formValues, setFormValues] = useState({
    image: '',
    title: '',
    rank: '',
    author: '',
    price_eth: '',
    price_usd: ''
  });

  useEffect(() => {
    if (selectedNft) {
      setFormValues(selectedNft);
      setOpen(true);
    } else {
      setFormValues({
        image: '',
        title: '',
        rank: '',
        author: '',
        price_eth: '',
        price_usd: ''
      });
    }
  }, [selectedNft]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setFormValues({
      image: '',
      title: '',
      rank: '',
      author: '',
      price_eth: '',
      price_usd: ''
    });
  };

  const handleFormChange = (field, value) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [field]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      let response;
      if (formValues.id) {
        response = await axios.put(`http://localhost:3001/nfts/${formValues.id}`, formValues);
        onNftUpdated(response.data);
      } else {
        response = await axios.post('http://localhost:3001/nfts', formValues);
        if (onNftAdded && typeof onNftAdded === 'function') {
          onNftAdded(response.data);
        }
        alert('NFT added successfully!');
      }
      handleClose();
    } catch (error) {
      handleClose();
      alert('Error saving NFT:', error);
    }
  };

  return (
    <div>
      <Button style={{ color: "white", background: "#444" }} onClick={handleOpen}>
        Add NFT
      </Button>
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-title" aria-describedby="modal-description">
        <Box sx={style}>
          <FormComponent
            formValues={formValues}
            onFormChange={handleFormChange}
            onSubmit={handleSubmit}
          />
        </Box>
      </Modal>
    </div>
  );
}
