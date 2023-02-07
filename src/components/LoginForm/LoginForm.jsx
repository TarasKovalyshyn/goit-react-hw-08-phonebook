import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';
import css from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    console.log(form)
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <div className='authFormContainer'>
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        Email
        <input type="email" name="email"  placeholder="Enter your Email..."/>
      </label>
      <label className={css.label}  placeholder="Enter your Password...">
        Password
        <input type="password" name="password" placeholder="Enter your Password..." />
      </label>
      <button type="submit">Log in </button>
    </form>
    </div>
  );
};
