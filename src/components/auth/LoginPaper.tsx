import React from 'react';
import { Paper, Grid } from '@mui/material';
import styles from '../../assets/styles/auth.module.css';
import authpage_image from "../../assets/images/authpage_image.png";
import LoginForm from './LoginForm';

const LoginPaper = () => {

  return (
    <Paper className={styles.paper}>
      <Grid container className={styles.gridContainer}>
        <Grid item sm={6} xs={6} lg={6}>
          <img
            className={styles.image}
            alt="<flight>"
            src={authpage_image}
          />
        </Grid>
        <Grid item sm={6} xs={6} lg={6}>
          <LoginForm />
        </Grid>
      </Grid>
    </Paper>
  )
}

export default LoginPaper
