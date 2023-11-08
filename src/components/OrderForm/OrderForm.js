import { useForm } from 'react-hook-form';
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
        </Label>

        <Button type="submit">Надіслати</Button>
      </Form>
    </BackdropForm>
  );
};
