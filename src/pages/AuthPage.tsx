import { Route, Routes } from 'react-router';
import LoginPaper from '../components/auth/LoginPaper';
import styles from '../assets/styles/auth.module.css';

const AuthPage = () => {
  return (
    <div className={styles.container}>
      <Routes>
        <Route path="*" element={<LoginPaper />} />
      </Routes>
    </div>
  )
}

export default AuthPage
