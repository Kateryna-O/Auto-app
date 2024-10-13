import css from './ReviewsItem.module.css';
import sprite from '../../assets/icon/sprite.svg';

export const ReviewsItem = ({ camper }) => {
  return (
    <div className={css.wrapperReviews}>
      {camper.reviews.map((review, index) => (
        <div key={index}>
          <div className={css.wrapper}>
            <div className={css.avatar}>
              {review.reviewer_name.charAt(0).toUpperCase()}
            </div>
            <div className={css.wrapperName}>
              <h3 className={css.name}>{review.reviewer_name}</h3>
              <div className={css.stars}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className={`${css.star} ${i < review.reviewer_rating ? css.filled : ''}`}
                  >
                    <use href={`${sprite}#icon-star`} />
                  </svg>
                ))}
              </div>
            </div>
          </div>
          <p className={css.comment}>{review.comment}</p>
        </div>
      ))}
    </div>
  );
};
