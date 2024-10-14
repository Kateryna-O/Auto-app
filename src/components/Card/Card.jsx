import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import sprite from '../../assets/icon/sprite.svg';
import css from './Card.module.css';
import { useLocation } from 'react-router-dom';

export const Card = ({ camper }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const imageSrc =
    camper.gallery && camper.gallery.length > 0
      ? camper.gallery[0].thumb
      : 'path-to-default-image';

  const location = useLocation();

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setIsFavorite(savedFavorites.some(fav => fav.id === camper.id));
  }, [camper.id]);

  const toggleFavorite = () => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];

    if (isFavorite) {
      const updatedFavorites = savedFavorites.filter(
        fav => fav.id !== camper.id
      );
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    } else {
      savedFavorites.push(camper);
      localStorage.setItem('favorites', JSON.stringify(savedFavorites));
    }

    setIsFavorite(!isFavorite);
  };

  return (
    <div className={css.wrapperCard}>
      <img src={imageSrc} alt={camper.name || 'Camper'} className={css.img} />
      <div>
        <div className={css.wrapperNamePrice}>
          <h2 className={css.name}>{camper.name}</h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <p className={css.price}>€{camper.price}</p>
            <button
              type="button"
              className={css.buttonHeart}
              onClick={toggleFavorite}
            >
              <svg
                className={`${css.iconHeart} ${isFavorite ? css.active : ''}`}
              >
                <use href={`${sprite}#icon-heart`} />
              </svg>
            </button>
          </div>
        </div>
        <div className={css.wrapperRating}>
          <p className={css.rating}>
            <svg className={css.iconStar}>
              <use href={`${sprite}#icon-star`} />
            </svg>
            {camper.rating}({camper.reviews.length} Reviews)
          </p>
          <p className={css.rating}>
            <svg className={css.iconMap}>
              <use href={`${sprite}#icon-Map`} />
            </svg>
            {camper.location}
          </p>
        </div>
        <p className={css.text}>{camper.description}</p>
        <ul className={css.list}>
          {camper.transmission === 'automatic' && (
            <li className={css.listItem}>
              <svg className={css.itemIcon}>
                <use href={`${sprite}#icon-diagram`} />
              </svg>
              <h2 className={css.itemSignature}>Automatic</h2>
            </li>
          )}
          {camper.engine === 'diesel' && (
            <li className={css.listItem}>
              <svg className={css.itemIcon}>
                <use href={`${sprite}#icon-Group`} />
              </svg>
              <h2 className={css.itemSignature}>Petrol</h2>
            </li>
          )}
          {camper.AC && (
            <li className={css.listItem}>
              <svg className={css.itemIcon}>
                <use href={`${sprite}#icon-wind`} />
              </svg>
              <h2 className={css.itemSignature}>AC</h2>
            </li>
          )}
          {camper.bathroom && (
            <li className={css.listItem}>
              <svg className={css.itemIcon}>
                <use href={`${sprite}#icon-droplet`} />
              </svg>
              <h2 className={css.itemSignature}>Bathroom</h2>
            </li>
          )}
          {camper.kitchen && (
            <li className={css.listItem}>
              <svg className={css.itemIcon}>
                <use href={`${sprite}#icon-cup`} />
              </svg>
              <h2 className={css.itemSignature}>Kitchen</h2>
            </li>
          )}
          {camper.TV && (
            <li className={css.listItem}>
              <svg className={css.itemIcon}>
                <use href={`${sprite}#icon-computer`} />
              </svg>
              <h2 className={css.itemSignature}>TV</h2>
            </li>
          )}
          {camper.radio && (
            <li className={css.listItem}>
              <svg className={css.itemIcon}>
                <use href={`${sprite}#icon-radio`} />
              </svg>
              <h2 className={css.itemSignature}>Radio</h2>
            </li>
          )}
          {camper.refrigerator && (
            <li className={css.listItem}>
              <svg className={css.itemIcon}>
                <use href={`${sprite}#icon-refrigerator`} />
              </svg>
              <h2 className={css.itemSignature}>Refrigerator</h2>
            </li>
          )}
          {camper.microwave && (
            <li className={css.listItem}>
              <svg className={css.itemIcon}>
                <use href={`${sprite}#icon-microwave`} />
              </svg>
              <h2 className={css.itemSignature}>Microwave</h2>
            </li>
          )}
          {camper.gas && (
            <li className={css.listItem}>
              <svg className={css.itemIcon}>
                <use href={`${sprite}#icon-gas`} />
              </svg>
              <h2 className={css.itemSignature}>Gas</h2>
            </li>
          )}
          {camper.water && (
            <li className={css.listItem}>
              <svg className={css.itemIcon}>
                <use href={`${sprite}#icon-water`} />
              </svg>
              <h2 className={css.itemSignature}>Water</h2>
            </li>
          )}
        </ul>
        <Link key={camper.id} to={`/catalog/${camper.id}`} state={location}>
          <button type="button" className={css.button}>
            Show more
          </button>
        </Link>
      </div>
    </div>
  );
};
