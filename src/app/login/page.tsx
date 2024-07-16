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
import { CountryCode, countryCodes } from '../assets/countryCodes';
import * as Yup from 'yup';
const Login = () => {
  const handleOnSubmitForm = (values: FormikValues) => {
    console.log({ values });
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
4
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

  return (
    <Container>
      <Grid container justifyContent="center" alignItems="center">
        <LoginContainer>
          <LoginHeaderContainer>
            <Typography fontWeight="bold">Login or sign up</Typography>
          </LoginHeaderContainer>
          <LoginForm onSubmit={formik.handleSubmit}>
            <WelcomeText>Welcome To Airbnb</WelcomeText>
            <LoginFormSelect
              name="country-code"
              id="country-code"
              label="Country Code"
              value={formik.values['country-code']}
              onChange={formik.handleChange}
            >
              {renderCountryOptions()}
            </LoginFormSelect>
            <LoginFormInput
              name="phone-number"
              label="Phone Number"
              id="phone-number"
              value={formik.values['phone-number']}
              onChange={formik.handleChange}
            />
            <Typography>
              We’ll call or text you to confirm your number. Standard message
              and data rates apply.
              <Typography sx={{ textDecoration: 'underline' }}>
                Privacy Policy
              </Typography>
            </Typography>
            <LoginFormSubmitButton type="submit" variant="contained">
              Submit
            </LoginFormSubmitButton>
          </LoginForm>
        </LoginContainer>
      </Grid>
    </Container>
  );
};

export default Login;
