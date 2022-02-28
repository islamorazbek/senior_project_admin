import { Button, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styles from '../../assets/styles/auth.module.css';
import { useTypedSelector } from '../../redux/store';

const ResetVerifyForm: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, loading } = useTypedSelector(state => state.auth)

  const formik = useFormik({
    initialValues: {
      email: 'islam@one.com'
    },
    onSubmit: async ({ email }) => {
      // const response = await reset(email);
      // if ("data" in response) {
      navigate('/reset')
      // }
    }
  })
  const { values, handleChange, handleSubmit } = formik;
  const { email } = values;

  return (
    <div className={styles.formContainer}>
      <Typography variant="h4" color="secondary" textAlign="center" gutterBottom>Forgot your password?</Typography>
      <Typography variant="h5" gutterBottom>Enter your email!</Typography>
      <form onSubmit={handleSubmit} className={styles.form}>
        <TextField name="email" label="Email" variant="standard" value={email} onChange={handleChange} fullWidth margin="normal" required />
        <Button variant="outlined" type="submit" fullWidth color="secondary" size="large" disabled={loading}>Send activation code</Button>
        {error && <Typography variant="caption" gutterBottom>Error occured. Try later!</Typography>}
      </form>
    </div>
  )
}

export default ResetVerifyForm