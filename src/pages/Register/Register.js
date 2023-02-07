import { Helmet, HelmetProvider } from 'react-helmet-async';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import css from './Register.module.css'


export default function Register() {
  return (
    <div className={css.registerContainer}>
      <HelmetProvider>
        <Helmet>
          <title>Registration</title>
        </Helmet>
        <RegisterForm />
      </HelmetProvider>
    </div>
  );
}
