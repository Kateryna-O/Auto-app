import { CatalogList } from '../../components/CatalogList/CatalogList.jsx';
import { SearchForm } from '../../components/SearchForm/SearchForm.jsx';
import css from './CatalogPage.module.css';

export const CatalogPage = () => {
  return (
    <div className={css.wrapper}>
      <SearchForm />
      <CatalogList />
    </div>
  );
};
