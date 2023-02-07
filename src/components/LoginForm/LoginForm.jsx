import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';
import css from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    console.log(form);
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <div className="authFormContainer">
      
      <form
        className={css.loginForm}
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <h2>Login</h2>
        <label className={css.loginLabel}>email</label>
        <input
          className={css.loginInput}
          type="email"
          name="email"
          placeholder="yourmail@gmail.com"
        />

        <label className={css.loginLabel} placeholder="Password">
          password
        </label>
        <input
          className={css.loginInput}
          type="password"
          name="password"
          placeholder="*************"
        />

        <button className={css.loginButton} type="submit">
          Log in{' '}
        </button>
      </form>
    </div>
  );
};
