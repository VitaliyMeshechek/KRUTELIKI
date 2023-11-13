import { useForm } from 'react-hook-form';
import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import { teal, yellow, red } from '@mui/material/colors';
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
// import { toast } from 'react-toastify';

// import { useSelector, useDispatch } from 'react-redux';
// import { useState, useEffect } from 'react';
// import { Form, Label, Input, Button } from './ContactForm.styled';

export const OrderForm = ({ isOrderFormOpen, openForm }) => {
  // const contacts = useSelector(selectContacts);
  // const dispatch = useDispatch();
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
    <BackdropForm isOpen={isOrderFormOpen} onClick={onOrderMenuClick}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormTitle>Контактна форма</FormTitle>
        <Label>
          Ім'я
          <Input
            {...register('name')}
            placeholder="Андрій"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label>
          Телефон
          <Input
            {...register('phone')}
            placeholder="+38096-123-45-67"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>{' '}
        <FormLabel
          id="demo-radio-buttons-group-label"
          sx={{
            '& .MuiSvgIcon-root': { fontSize: 28 },
            color: teal[50],
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
              color: teal[50],
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
              color: teal[50],
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
              color: teal[50],
              '& .Mui-checked': {
                color: yellow[600],
              },
            }}
          />
        </FormGroup>
        <Button type="submit">Надіслати</Button>
      </Form>
    </BackdropForm>
  );
};

// amber, blue, blueGrey, brown, common, cyan, deepOrange, deepPurple, green, grey, indigo, lightBlue, lightGreen, lime, orange, pink, purple, red, teal, yellow
