import { useForm } from 'react-hook-form';
import { FormTitle, Form, Label, Input, Button } from './OrderForm.styled';
// import { toast } from 'react-toastify';

// import { useSelector, useDispatch } from 'react-redux';
// import { useState, useEffect } from 'react';
// import { Form, Label, Input, Button } from './ContactForm.styled';

export const OrderForm = () => {
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

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  //   reset,
  // } = useForm({
  //   defaultValues: {
  //     name: '',
  //     phone: '',
  //   },
  //   mode: 'onBlur',
  // });

  // console.log(contacts);

  // const onSubmit = event => {
  //   for (const contact of contacts) {
  //     if (contact.name.toLowerCase() === event.name.toLowerCase()) {
  //       toast.error(
  //         `The entered ${event.name} already exists in contacts! Please enter another name!`
  //       );
  //       return;
  //     }

  //     if (contact.phone === event.phone) {
  //       toast.error(
  //         `The entered ${event.phone} already exists in contacts! Please enter another number!`
  //       );
  //       return;
  //     }
  //   }
  //   dispatch(addContact(event));

  //   reset();
  // };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormTitle>Контактна форма</FormTitle>
      <Label>
        Ім'я
        <Input
          {...register('name')}
          placeholder="Віталій"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        Телефон
        <Input
          {...register('phone')}
          placeholder="283-34-54"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>

      <Button type="submit">Надіслати</Button>
    </Form>
  );
};
