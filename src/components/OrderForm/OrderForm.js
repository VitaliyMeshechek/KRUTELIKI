import MuiPhoneNumber from 'material-ui-phone-number';

import { useForm, Controller } from 'react-hook-form';
import * as React from 'react';
import { useDispatch } from 'react-redux';
// import Box from '@mui/material/Box';

import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import { grey, yellow, red, green, blue, brown } from '@mui/material/colors';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
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
import { useState, useEffect } from 'react';
// import { Form, Label, Input, Button } from './ContactForm.styled';

export const OrderForm = ({ isOrderFormOpen, openForm }) => {
  // const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  // const [name, setName] = useState('');
  // const [phone, setPhone] = useState('');
  // const [comment, setComment] = useState('');
  // const [checked, setChecked] = React.useState(true);
  // const [formData, setFormData] = useState({
  //   phone: '',
  // });

  // const { userphone } = formData;

  const schema = yup.object().shape({
    name: yup.string().required(),
    phone: yup.string().min(9).required(),
  });

  const { control, handleSubmit, reset } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      phone: '',
    },
    mode: 'onSubmit',
  });

  const onSubmit = data => {
    console.log('data', data);
    reset();
  };

  // useEffect(() => {
  //   if (formState.isSubmitSuccessful) {
  //     reset();
  //   }
  // }, [formState, isSubmitSuccessful, reset]);

  // const onOrderMenuClick = e => {
  //   if (e.target) {
  //     openForm();
  //   }
  // };

  // const handleChange = event => {
  //   setChecked(event.target.checked);
  // };

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  return (
    <ModalWrapper padding="44px 12px 16px 12px">
      <BackdropForm isOpen={isOrderFormOpen}>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormTitle>Контактна форма</FormTitle>
          <Controller
            control={control}
            name="name"
            render={({ field: { onChange, onBlur, value, name } }) => (
              <TextField
                onChange={onChange}
                onBlur={onBlur}
                selected={value}
                name={name}
                rules={{ required: true }}
                defaultValue=""
                label="Ім'я"
                autoComplete="name"
                autoFocus
                variant="outlined"
                placeholder="Андрій"
                sx={{
                  '& > :not(style)': {
                    m: 1,
                    borderRadius: 40,
                    width: '49ch',
                    fontSize: 16,
                    textAlign: 'left',
                  },
                }}
              />
            )}
          />
          {/* {errors.name && <p>Fields must be filled!</p>} */}
          <Controller
            control={control}
            name="phone"
            render={({ field: { onChange, onBlur, value, name } }) => (
              <MuiPhoneNumber
                defaultCountry={'ua'}
                onChange={onChange}
                onBlur={onBlur}
                selected={value}
                name={name}
                required
                label="Телефон"
                autoComplete="phone"
                autoFocus
                variant="outlined"
                sx={{
                  '& > :not(style)': {
                    m: 1,
                    borderRadius: 40,
                    width: '49ch',
                    fontSize: 16,
                    textAlign: 'left',
                  },
                }}
              />
            )}
          />
          <FormLabel
            id="demo-radio-buttons-group-label"
            sx={{
              fontSize: 28,
              '& .MuiSvgIcon-root': {},
              color: grey[900],
            }}
          >
            Вибрати свято
          </FormLabel>
          <FormGroup>
            <FormControlLabel
              required
              control={
                <Checkbox
                  icon={<FavoriteBorder sx={{ color: red[900] }} />}
                  checkedIcon={<Favorite />}
                />
              }
              label="Твій день народження"
              sx={{
                '& .MuiSvgIcon-root': { fontSize: 28 },
                color: blue[900],
                '& .Mui-checked': {
                  color: yellow[500],
                },
              }}
            />
            <FormControlLabel
              required
              control={
                <Checkbox
                  icon={<FavoriteBorder sx={{ color: red[900] }} />}
                  checkedIcon={<Favorite />}
                />
              }
              label="Веселі ігри"
              sx={{
                '& .MuiSvgIcon-root': { fontSize: 28 },
                color: blue[900],
                '& .Mui-checked': {
                  color: yellow[500],
                },
              }}
            />
            <FormControlLabel
              required
              control={
                <Checkbox
                  icon={<FavoriteBorder sx={{ color: red[900] }} />}
                  checkedIcon={<Favorite />}
                />
              }
              label="Розваги на воді"
              sx={{
                '& .MuiSvgIcon-root': { fontSize: 28 },
                color: blue[900],
                '& .Mui-checked': {
                  color: yellow[500],
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
// onClick={() => dispatch(showModal(false))}

// import MuiPhoneNumber from 'material-ui-phone-number';

// import { useForm, Controller } from 'react-hook-form';
// import * as React from 'react';
// import { useDispatch } from 'react-redux';
// // import Box from '@mui/material/Box';

// import TextField from '@mui/material/TextField';
// import Checkbox from '@mui/material/Checkbox';
// import FormGroup from '@mui/material/FormGroup';
// import FormLabel from '@mui/material/FormLabel';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import { teal, yellow, red, green, blue, amber } from '@mui/material/colors';
// import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
// import Favorite from '@mui/icons-material/Favorite';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from 'yup';
// import {
//   FormTitle,
//   Form,
//   Label,
//   Input,
//   Button,
//   BackdropForm,
// } from './OrderForm.styled';
// import ModalWrapper from 'components/ReusableComponents/Modal/ModalWrapper';

// import { showModal } from 'redux/modal/slice';
// // import { toast } from 'react-toastify';

// // import { useSelector, useDispatch } from 'react-redux';
// import { useState, useEffect } from 'react';
// // import { Form, Label, Input, Button } from './ContactForm.styled';

// export const OrderForm = ({ isOrderFormOpen, openForm }) => {
//   // const contacts = useSelector(selectContacts);
//   const dispatch = useDispatch();
//   // const [name, setName] = useState('');
//   // const [phone, setPhone] = useState('');
//   // const [comment, setComment] = useState('');
//   // const [checked, setChecked] = React.useState(true);
//   // const [formData, setFormData] = useState({
//   //   userphone: '',
//   // });

//   // const { userphone } = formData;
//   const schema = yup.object().shape({
//     // name: yup.string().required("O campo nome é obrigatório"),
//     // email: yup
//     //   .string()
//     //   .required("O campo email é obrigatório")
//     //   .email("Formato de email inválido"),
//     name: yup.string().required(),
//     phone: yup.string().min(9),
//   });

//   const {
//     control,
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//   } = useForm({
//     resolver: yupResolver(schema),
//     defaultValues: {
//       name: '',
//       phone: '',
//     },
//   });

//   const onSubmit = data => {
//     console.log('data', data);
//     reset();
//   };

//   // const onOrderMenuClick = e => {
//   //   if (e.target) {
//   //     openForm();
//   //   }
//   // };

//   // const handleChange = event => {
//   //   setChecked(event.target.checked);
//   // };

//   const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

//   return (
//     <ModalWrapper padding="44px 12px 16px 12px">
//       <BackdropForm isOpen={isOrderFormOpen}>
//         <Form onSubmit={handleSubmit(onSubmit)}>
//           <FormTitle>Контактна форма</FormTitle>
//           <TextField
//             {...register('name')}
//             required
//             label="Ім'я"
//             autoComplete="name"
//             autoFocus
//             variant="outlined"
//             placeholder="Андрій"
//             sx={{
//               '& > :not(style)': {
//                 m: 1,
//                 borderRadius: 40,
//                 width: '49ch',
//                 fontSize: 16,
//                 textAlign: 'left',
//               },
//             }}
//           />
//           {errors.name && <p>Fields must be filled!</p>}
//           <Controller
//             name="phone"
//             control={control}
//             render={({ name, onBlur, onChange, value }) => (
//               <MuiPhoneNumber
//                 name={name}
//                 value={value}
//                 onBlur={onBlur}
//                 onChange={onChange}
//                 defaultCountry={'ua'}
//                 required
//                 id="contactPhoneNumber"
//                 label="Телефон"
//                 variant="outlined"
//                 sx={{
//                   '& > :not(style)': {
//                     m: 1,
//                     borderRadius: 40,
//                     width: '49ch',
//                     fontSize: 16,
//                     textAlign: 'left',
//                   },
//                 }}
//               />
//             )}
//           />
//           <FormLabel
//             id="demo-radio-buttons-group-label"
//             sx={{
//               fontSize: 28,
//               '& .MuiSvgIcon-root': {},
//               color: amber[500],
//             }}
//           >
//             Вибрати свято
//           </FormLabel>
//           <FormGroup>
//             <FormControlLabel
//               // required
//               control={
//                 <Checkbox
//                   icon={<FavoriteBorder sx={{ color: red[500] }} />}
//                   checkedIcon={<Favorite />}
//                 />
//               }
//               label="Твій день народження"
//               sx={{
//                 '& .MuiSvgIcon-root': { fontSize: 28 },
//                 color: blue[800],
//                 '& .Mui-checked': {
//                   color: yellow[500],
//                 },
//               }}
//             />
//             <FormControlLabel
//               // required
//               control={
//                 <Checkbox
//                   icon={<FavoriteBorder sx={{ color: red[500] }} />}
//                   checkedIcon={<Favorite />}
//                 />
//               }
//               label="Веселі ігри"
//               sx={{
//                 '& .MuiSvgIcon-root': { fontSize: 28 },
//                 color: blue[800],
//                 '& .Mui-checked': {
//                   color: yellow[500],
//                 },
//               }}
//             />
//             <FormControlLabel
//               // required
//               control={
//                 <Checkbox
//                   icon={<FavoriteBorder sx={{ color: red[500] }} />}
//                   checkedIcon={<Favorite />}
//                 />
//               }
//               label="Розваги на воді"
//               sx={{
//                 '& .MuiSvgIcon-root': { fontSize: 28 },
//                 color: blue[800],
//                 '& .Mui-checked': {
//                   color: yellow[500],
//                 },
//               }}
//             />
//           </FormGroup>
//           <Button type="submit">Надіслати</Button>
//         </Form>
//       </BackdropForm>
//     </ModalWrapper>
//   );
// };
