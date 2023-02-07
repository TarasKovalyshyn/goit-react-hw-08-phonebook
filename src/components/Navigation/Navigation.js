import { useAuth } from 'hooks/useAuth';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

export const Navigation = () => {
  const { isLoggetIn } = useAuth();

  return (
    <nav>
      <NavLink to="/" className={css.link}>
        Home
      </NavLink>
      {isLoggetIn && (
        <NavLink to="/contacts" className={css.link}>
          contacts
        </NavLink>
      )}
    </nav>
  );
};
