import { Button, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styles from '../../assets/styles/auth.module.css';
import { useTypedSelector } from '../../redux/store';

const ResetSubmitForm: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, loading} = useTypedSelector(state => state.auth)

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      repeatPassword: '',
    },
    onSubmit: async ({ email, password, repeatPassword }) => {
      if (password === repeatPassword) {
        // const response = await resetSubmit({email, password});
        // if ("data" in response) {
        navigate('/')
        // }
      }
    }
  })
  const { values, handleChange, handleSubmit } = formik;
  const { email, password, repeatPassword } = values;

  return (
    <div className={styles.formContainer}>
      <Typography variant="h4" color="primary" textAlign="center" gutterBottom>Want to change your password?</Typography>
      <form onSubmit={handleSubmit} className={styles.form}>
        <TextField name="email" label="Email" variant="standard" value={email} onChange={handleChange} fullWidth margin="normal" required />
        <TextField name="password" type="password" label="New Password" variant="standard" value={password} onChange={handleChange} fullWidth margin="normal" required />
        <TextField name="repeatPassword" type="password" label="Repeat Passwort" variant="standard" value={repeatPassword} onChange={handleChange} fullWidth margin="normal" required />
        <Button variant="outlined" type="submit" fullWidth color="primary" size="large" disabled={loading}>Change password</Button>
        {error && <Typography variant="caption" gutterBottom>Error occured. Try later!</Typography>}
      </form>
    </div>
  )
}

export default ResetSubmitForm