import { Helmet, HelmetProvider } from 'react-helmet-async';
import { LoginForm } from 'components/LoginForm/LoginForm';

const style = {
  container: {
    minHeight: 'calc(100vh - 50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }}

export default function Login() {
  return (
    <div style={style.container} >
      <HelmetProvider>
        <Helmet>
          <title>Login</title>
        </Helmet>
        <LoginForm />
      </HelmetProvider>
    </div>
  );
}