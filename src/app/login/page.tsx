'use client';

import { FormikValues, useFormik } from 'formik';
import { Typography, Container, MenuItem } from '@mui/material';
import {
  Grid,
  LoginContainer,
  LoginForm,
  LoginHeaderContainer,
  LoginFormInput,
  LoginFormSelect,
  LoginFormSubmitButton,
  WelcomeText
} from './login.styles';
import { CountryCode, countryCodes } from '../../assets/countryCodes';
import * as Yup from 'yup';
import { login, logout } from '@/lib/features/user/userSlice';
import { useDispatch } from 'react-redux';

const Login = () => {
  const dispatch = useDispatch();

  const handleOnSubmitForm = (values: FormikValues) => {
    console.log({ values });

    const loginValues = {
      phoneNumber: values['country-code'] + values['phone-number'],
      token: '123456'
    };

    dispatch(login(loginValues));
  };

  const formik = useFormik({
    initialValues: {
      'country-code': '49',
      'phone-number': undefined
    },
    validationSchema: Yup.object({
      'phone-number': Yup.string().required('Phone number is required'),
      'country-code': Yup.number().required('Country code is required')
    }),
    onSubmit: handleOnSubmitForm
  });

  const renderCountryOptions = (): React.ReactNode[] =>
    countryCodes.map(
      ({
        name: countryName,
        value: countryValue
      }: CountryCode): React.ReactNode => (
        <MenuItem key={countryValue} value={countryValue}>
          {countryName}
        </MenuItem>
      )
    );

  const handleLogout = (): void => {
    dispatch(logout());
  };

  return (
    <Container>
      <Grid alignItems="center" container justifyContent="center">
        <LoginContainer>
          <LoginHeaderContainer>
            <Typography fontWeight="bold">Login or sign up</Typography>
          </LoginHeaderContainer>
          <LoginForm onSubmit={formik.handleSubmit}>
            <WelcomeText>Welcome To Airbnb</WelcomeText>
            <LoginFormSelect
              id="country-code"
              label="Country Code"
              name="country-code"
              onChange={formik.handleChange}
              value={formik.values['country-code']}
            >
              {renderCountryOptions()}
            </LoginFormSelect>
            <LoginFormInput
              id="phone-number"
              label="Phone Number"
              name="phone-number"
              onChange={formik.handleChange}
              value={formik.values['phone-number']}
            />
            <Typography>
              We’ll call or text you to confirm your number. Standard message
              and data rates apply.
            </Typography>
            <Typography sx={{ textDecoration: 'underline' }}>
              Privacy Policy
            </Typography>
            <LoginFormSubmitButton type="submit" variant="contained">
              Submit
            </LoginFormSubmitButton>
          </LoginForm>
        </LoginContainer>
      </Grid>

      <div onClick={handleLogout}>logout</div>
    </Container>
  );
};

export default Login;
