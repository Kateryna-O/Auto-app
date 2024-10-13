import { useEffect, useRef, useState } from 'react';
import { Features } from '../../components/Features/Features';
import { ReservationForm } from '../../components/ReservationForm/ReservationForm';
import { Reviews } from '../../components/Reviews/Reviews';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCamperDetails,
  selectError,
  selectIsLoading,
} from '../../redux/camper/selectors';
import { Loader } from '../../components/Loader/Loader';
import { useLocation, useParams } from 'react-router-dom';
import css from './CamperDetailsPage.module.css';
import sprite from '../../assets/icon/sprite.svg';
import { fetchCampersDetails } from '../../redux/camper/operations.js';
import { Link } from 'react-router-dom';

export const CamperDetailsPage = () => {
  const dispatch = useDispatch();
  const camper = useSelector(selectCamperDetails);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const { id } = useParams();

  const [activeTab, setActiveTab] = useState('Features');
  const location = useLocation();
  const backLinkRef = useRef(location.state ?? '/');

  useEffect(() => {
    dispatch(fetchCampersDetails({ id }));
  }, [dispatch, id]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!camper || Object.keys(camper).length === 0) {
    return <p>No camper found</p>;
  }

  return (
    <div className={css.wrapper}>
      <div>
        <h2 className={css.name}>
          <Link to={backLinkRef.current} className={css.overview}>
            ←
          </Link>
          {camper.name}
        </h2>
        <div className={css.wrapperRating}>
          <p className={css.rating}>
            <svg className={css.iconStar}>
              <use href={`${sprite}#icon-star`} />
            </svg>
            {camper.rating}({camper.reviews.length} Reviews)
          </p>
          <p className={`${css.rating} ${css.location}`}>
            <svg className={css.iconMap}>
              <use href={`${sprite}#icon-Map`} />
            </svg>
            {camper.location}
          </p>
        </div>
        <p className={css.price}>€{camper.price}</p>
        <div className={css.gallery}>
          {camper.gallery.map((image, index) => (
            <img
              className={css.imgItem}
              key={index}
              src={image.thumb}
              alt={`${camper.name}`}
            />
          ))}
        </div>
        <p className={css.text}>{camper.description}</p>
      </div>
      <div className={css.wrapperdesc}>
        <div className={css.tabs}>
          <h3
            className={`${css.tab} ${activeTab === 'Features' ? css.active : ''}`}
            onClick={() => setActiveTab('Features')}
          >
            Features
          </h3>
          <h3
            className={`${css.tab} ${activeTab === 'Reviews' ? css.active : ''}`}
            onClick={() => setActiveTab('Reviews')}
          >
            Reviews
          </h3>
        </div>
        <div className={css.position}>
          {activeTab === 'Features' ? (
            <Features camper={camper} />
          ) : (
            <Reviews camper={camper} />
          )}
          <ReservationForm />
        </div>
      </div>
    </div>
  );
};
