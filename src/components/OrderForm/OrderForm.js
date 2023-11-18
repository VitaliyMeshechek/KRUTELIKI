import { useForm } from 'react-hook-form';
import * as React from 'react';
import { useDispatch } from 'react-redux';
// import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import { teal, yellow, red, green, blue } from '@mui/material/colors';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import {
  FormTitle,
  Form,
  Label,
  Input,
  Button,
  BackdropForm,
} from './OrderForm.styled';
import ModalWrapper from 'components/ReusableComponents/Modal/ModalWrapper';

import { showModal } from 'redux/modal/slice';
// import { toast } from 'react-toastify';

// import { useSelector, useDispatch } from 'react-redux';
// import { useState, useEffect } from 'react';
// import { Form, Label, Input, Button } from './ContactForm.styled';

export const OrderForm = ({ isOrderFormOpen, openForm }) => {
  // const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  // const [name, setName] = useState('');
  // const [phone, setPhone] = useState('');
  // const [comment, setComment] = useState('');
  const [checked, setChecked] = React.useState(true);

  const onSubmit = data => {
    console.log('data', data);
  };

  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: '',
      phone: '',
    },
  });

  const onOrderMenuClick = e => {
    if (e.target) {
      openForm();
    }
  };

  const handleChange = event => {
    setChecked(event.target.checked);
  };

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  return (
    <ModalWrapper padding="44px 12px 16px 12px">
      <BackdropForm isOpen={isOrderFormOpen} onClick={onOrderMenuClick}>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormTitle>Контактна форма</FormTitle>
          <TextField
            id="outlined-basic"
            label="Ім'я"
            variant="outlined"
            placeholder="Андрій"
            sx={{
              '& > :not(style)': {
                m: 1,
                borderRadius: 40,
                width: '49ch',
                fontSize: 16,
                textAlign: 'left',
                // marginLeft: 'auto',
              },
            }}
          />
          <TextField
            id="outlined-basic"
            label="Телефон"
            variant="outlined"
            placeholder="+38096-123-45-67"
            sx={{
              '& > :not(style)': {
                m: 1,
                borderRadius: 40,
                width: '49ch',
                fontSize: 16,
                textAlign: 'left',
                // marginLeft: 'auto',
              },
            }}
          />
          {/* <Label>
          Ім'я
          <Input
            {...register('name')}
            placeholder="Андрій"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label> */}
          {/* <Label>
          Телефон
          <Input
            {...register('phone')}
            placeholder="+38096-123-45-67"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>{' '} */}
          <FormLabel
            id="demo-radio-buttons-group-label"
            sx={{
              fontSize: 28,
              '& .MuiSvgIcon-root': {},
              color: red[500],
            }}
          >
            Вибрати свято
          </FormLabel>
          <FormGroup>
            <FormControlLabel
              required
              control={
                <Checkbox
                  icon={<FavoriteBorder sx={{ color: red[500] }} />}
                  checkedIcon={<Favorite />}
                />
              }
              label="Твій день народження"
              sx={{
                '& .MuiSvgIcon-root': { fontSize: 28 },
                color: blue[800],
                '& .Mui-checked': {
                  color: yellow[600],
                },
              }}
            />
            <FormControlLabel
              required
              control={
                <Checkbox
                  icon={<FavoriteBorder sx={{ color: red[500] }} />}
                  checkedIcon={<Favorite />}
                />
              }
              label="Веселі ігри"
              sx={{
                '& .MuiSvgIcon-root': { fontSize: 28 },
                color: blue[800],
                '& .Mui-checked': {
                  color: yellow[600],
                },
              }}
            />
            <FormControlLabel
              required
              control={
                <Checkbox
                  icon={<FavoriteBorder sx={{ color: red[500] }} />}
                  checkedIcon={<Favorite />}
                />
              }
              label="Розваги на воді"
              sx={{
                '& .MuiSvgIcon-root': { fontSize: 28 },
                color: blue[800],
                '& .Mui-checked': {
                  color: yellow[600],
                },
              }}
            />
          </FormGroup>
          <Button type="submit" onClick={() => dispatch(showModal(false))}>
            Надіслати
          </Button>
        </Form>
      </BackdropForm>
    </ModalWrapper>
  );
};

// amber, blue, blueGrey, brown, common, cyan, deepOrange, deepPurple, green, grey, indigo, lightBlue, lightGreen, lime, orange, pink, purple, red, teal, yellow
