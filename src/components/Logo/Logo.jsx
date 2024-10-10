import { Link } from 'react-router-dom';
import css from './Logo.module.css';
export const Logo = () => {
  return (
    <div>
      <Link to="/" className={css.logo}>
        <span className={css.logoAccent}>Travel</span>Trucks
      </Link>
    </div>
  );
};
