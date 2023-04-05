import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import css from './Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink to="/" className={css.link}>
        Home
      </NavLink>
      {isLoggedIn && <NavLink className={css.link}>Contacts</NavLink>}
    </nav>
  );
};
