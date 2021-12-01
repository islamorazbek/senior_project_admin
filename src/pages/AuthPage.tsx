import React from 'react';
import { Route, Routes } from 'react-router';
import LoginPaper from '../components/auth/LoginPaper';
import styles from '../assets/styles/auth.module.css';
// import { Container } from '@mui/material';

const AuthPage = () => {
  return (
    <div className={styles.container}>
      <Routes>
        <Route path="" element={<LoginPaper />} />
      </Routes>
    </div>
  )
}

export default AuthPage
