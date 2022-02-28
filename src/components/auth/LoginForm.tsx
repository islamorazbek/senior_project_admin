import { Button, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import styles from '../../assets/styles/auth.module.css';
import { login } from '../../redux/auth/auth.action';
import { useTypedSelector } from '../../redux/store';

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, loading, isAuth } = useTypedSelector(state => state.auth);

  const formik = useFormik({
    initialValues: {
      email: 'islam@one.com',
      password: '123456'
    },
    onSubmit: async (values) => {
      dispatch(login(values))
    }
  })

  React.useEffect(() => {
    if(isAuth) {
      navigate('/app/blogs')
    }
  }, [isAuth])

  const { values, handleChange, handleSubmit } = formik;
  const { email, password } = values;

  return (
    <div className={styles.formContainer}>
      <Typography variant="h4" color="primary" gutterBottom>Welcome, Admin</Typography>
      <Typography variant="h5" gutterBottom>Sign in to continue!</Typography>
      <form onSubmit={handleSubmit} className={styles.form}>
        <TextField name="email" label="Email" variant="standard" value={email} onChange={handleChange} fullWidth margin="normal" required />
        <TextField name="password" type="password" label="Password" variant="standard" value={password} onChange={handleChange} fullWidth margin="normal" required />
        <Button variant="outlined" type="submit" fullWidth color="primary" size="large" disabled={loading}>Log In</Button>
        {error && <Typography variant="caption" gutterBottom>Error occured. Try later!</Typography>}
        <Link to='/verify'>
          <Typography component='a' color='black' gutterBottom>Forgot your password?</Typography>
        </Link>
      </form>
    </div>
  )
}

export default LoginForm
