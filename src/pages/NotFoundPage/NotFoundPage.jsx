import { Link } from 'react-router-dom';
import styles from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <div className={styles.notFoundContainer}>
      <h3 className={styles.notFoundHeader}>404 - Page Not Found</h3>
      <p className={styles.notFoundMessage}>
        Oops! It seems that this page does not exist😞
      </p>
      <Link to="/" className={styles.backLink}>
        Go to home
      </Link>
    </div>
  );
};

export default NotFoundPage;
