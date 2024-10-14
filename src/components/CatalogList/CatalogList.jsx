import { useDispatch, useSelector } from 'react-redux';
import {
  selectCampers,
  selectError,
  selectIsLoading,
} from '../../redux/camper/selectors';
import { useEffect, useState } from 'react';
import { fetchCampers } from '../../redux/camper/operations';
import { Card } from '../Card/Card';
import css from './CatalogList.module.css';
import { Loader } from '../Loader/Loader';

export const CatalogList = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const [page, setPage] = useState(1);
  const [itemsPerPage] = useState(4); // Кількість елементів на сторінці не змінюється

  // Викликається лише при зміні сторінки
  useEffect(() => {
    dispatch(fetchCampers({ page, itemsPerPage }));
  }, [dispatch, page, itemsPerPage]);

  const loadMore = () => {
    setPage(prevPage => prevPage + 1); // Тільки збільшуємо номер сторінки
  };

  if (isLoading && campers.length === 0) {
    return <Loader />;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <ul>
        {campers.slice(0, itemsPerPage * page).map((camper, index) => (
          <li key={`${camper.id}-${index}`}>
            <Card camper={camper} />
          </li>
        ))}
      </ul>
      {campers.length > itemsPerPage * page && ( // Відображаємо кнопку, якщо є ще елементи для завантаження
        <button type="button" className={css.buttonLoad} onClick={loadMore}>
          Load more
        </button>
      )}
    </div>
  );
};
