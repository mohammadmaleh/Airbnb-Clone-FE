import styled from '@emotion/styled';
import {
  Box,
  Button,
  Grid as MUIGrid,
  Select,
  TextField,
  Typography
} from '@mui/material';
import { theme } from '../assets/colors';
export const Grid = styled(MUIGrid)`
  height: 100vh;
`;

export const LoginContainer = styled(Box)`
  border-radius: 5px;
  border: 1px solid ${theme.colors.black};
  min-width: 560px;
`;

export const LoginHeaderContainer = styled.div`
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${theme.colors.primary1};
`;

export const LoginForm = styled.form`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  align-items: center;
`;

export const LoginFormInput = styled(TextField)`
  width: 100%;
`;
export const LoginFormSelect = styled(Select)`
  width: 100%;
`;

export const LoginFormSubmitButton = styled(Button)`
  width: 100%;
  margin-top: 10px;
`;

export const WelcomeText = styled(Typography)`
  font-weight: bold;
  font-size: 22px;
  width: 100%;
  text-align: left;
`;
