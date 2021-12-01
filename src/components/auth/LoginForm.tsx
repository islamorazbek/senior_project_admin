import { Button, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import styles from '../../assets/styles/auth.module.css';
import { authApi } from '../../redux/services/auth';
import { setTokens } from '../../redux/slices/authSlice';

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login, { isLoading, isError }] = authApi.useLoginMutation();

  const formik = useFormik({
    initialValues: {
      email: 'islam@one.com',
      password: '123456'
    },
    onSubmit: async (values) => {
      const response = await login(values);
      if ("data" in response) {
        dispatch(setTokens(response.data));
        localStorage.setItem('access_token', response.data.access_token);
        localStorage.setItem('refresh_token', response.data.refresh_token);
        navigate('/app')
      }
    }
  })

  const { values, handleChange, handleSubmit } = formik;
  const { email, password } = values;

  return (
    <div className={styles.formContainer}>
      <Typography variant="h4" color="primary" gutterBottom>Welcome, Admin</Typography>
      <Typography variant="h5" gutterBottom>Sign in to continue!</Typography>
      <form onSubmit={handleSubmit} className={styles.form}>
        <TextField name="email" label="Email" variant="standard" value={email} onChange={handleChange} fullWidth margin="normal" required />
        <TextField name="password" label="Password" variant="standard" value={password} onChange={handleChange} fullWidth margin="normal" required />
        <Button variant="outlined" type="submit" fullWidth color="primary" size="large" disabled={isLoading}>Log In</Button>
        {isError && <Typography variant="caption" gutterBottom>Error occured. Try later!</Typography>}
        <Typography variant="subtitle1" gutterBottom>Forgot your password?</Typography>
      </form>
    </div>

  )
}

export default LoginForm
