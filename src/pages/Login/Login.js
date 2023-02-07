import { Helmet, HelmetProvider } from 'react-helmet-async';
import { LoginForm } from 'components/LoginForm/LoginForm';
import css from './Login.module.css'

export default function Login() {
  return (
    <div className={css.loginContainer} >
      <HelmetProvider>
        <Helmet>
          <title>Login</title>
        </Helmet>
        <LoginForm />
      </HelmetProvider>
    </div>
  );
}