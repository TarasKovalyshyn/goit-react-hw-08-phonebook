import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div className="authFormContainer">
    
      <form
      
        className={css.registerForm}
        onSubmit={handleSubmit}
        autoComplete="off"
      >
          <h2>Register</h2>
        <label className={css.registerLabel}>username</label>
        <input
          className={css.registerInput}
          type="text"
          name="name"
          placeholder="Enter your name..."
        />

        <label className={css.registerLabel}>email </label>
        <input
          className={css.registerInput}
          type="email"
          name="email"
          placeholder="Enter your email..."
        />

        <label className={css.registerLabel}>password </label>
        <input
          className={css.registerInput}
          type="password"
          name="password"
          placeholder="Create a password"
        />

        <button className={css.registerButton} type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

// export const RegisterForm = () => {
//   const dispatch = useDispatch();

//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleChange = ({ target: { name, value } }) => {
//     switch (name) {
//       case 'name':
//         return setName(value);
//       case 'email':
//         return setEmail(value);
//       case 'password':
//         return setPassword(value);

//       default:
//         return;
//     }
//   };

// const handleSubmit = e => {
//   e.preventDefault();
//   dispatch(register({ name, email, password }));
//   setName('');
//   setEmail('');
//   setPassword('');
// };

//   return (
//     <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
//       <label className={css.label}>
//         Username
//         <input type="text" name="name" value={name} onChange={handleChange} />
//       </label>
//       <label className={css.label}>
//         Email
//         <input
//           type="email"
//           name="email"
//           value={email}
//           onChange={handleChange}
//         />
//       </label>
//       <label className={css.label}>
//         Password
//         <input
//           type="password"
//           name="password"
//           value={password}
//           onChange={handleChange}
//         />
//       </label>
//       <button type="submit">Register</button>
//     </form>
//   );
// };
