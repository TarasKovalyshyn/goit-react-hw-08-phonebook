import { Helmet, HelmetProvider } from 'react-helmet-async';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';

const style = {
  container: {
    minHeight: 'calc(100vh - 50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }}

export default function Register() {
  return (
    <div style={style.container}>
      <HelmetProvider>
        <Helmet>
          <title>Registration</title>
        </Helmet>
        <RegisterForm />
      </HelmetProvider>
    </div>
  );
}
