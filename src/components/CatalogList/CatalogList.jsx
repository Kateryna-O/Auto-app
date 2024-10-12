import { useDispatch, useSelector } from 'react-redux';
import {
  selectCampers,
  selectError,
  selectIsLoading,
} from '../../redux/camper/selectors';
import { useEffect } from 'react';
import { fetchCampers } from '../../redux/camper/operations';
import { Card } from '../Card/Card';
import css from './CatalogList.module.css';
import { Loader } from '../Loader/Loader';

export const CatalogList = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <ul>
        {campers.map(camper => (
          <li key={camper.id}>
            <Card camper={camper} />
          </li>
        ))}
      </ul>
      <button type="button" className={css.buttonLoad}>
        Load more
      </button>
    </div>
  );
};
