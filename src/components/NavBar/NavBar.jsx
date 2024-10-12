import { NavLink } from 'react-router-dom';
import { Logo } from '../Logo/Logo';
import css from './NavBar.module.css';

export const NavBar = () => {
  return (
    <div className={css.navBar}>
      <Logo />
      <nav className={css.navigate}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? css.textActive : css.text)}
        >
          Home
        </NavLink>
        <NavLink
          to="/catalog"
          className={({ isActive }) => (isActive ? css.textActive : css.text)}
        >
          Catalog
        </NavLink>
      </nav>
    </div>
  );
};
