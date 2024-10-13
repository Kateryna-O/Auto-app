import css from './Features.module.css';
import sprite from '../../assets/icon/sprite.svg';

export const Features = ({ camper }) => {
  return (
    <div className={css.wrapper}>
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
        {camper.TV && (
          <li className={css.listItem}>
            <svg className={css.itemIcon}>
              <use href={`${sprite}#icon-computer`} />
            </svg>
            <h2 className={css.itemSignature}>TV</h2>
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
      <div>
        <h3>Vehicle details</h3>
        <hr className={css.line} />
        <div className={css.wrapperParam}>
          <p className={css.nameParam}>Form</p>
          <p className={css.nameParam}>{camper.form}</p>
        </div>
        <div className={css.wrapperParam}>
          <p className={css.nameParam}>Length</p>
          <p className={css.nameParam}>{camper.length}</p>
        </div>
        <div className={css.wrapperParam}>
          <p className={css.nameParam}>Width</p>
          <p className={css.nameParam}>{camper.width}</p>
        </div>
        <div className={css.wrapperParam}>
          <p className={css.nameParam}>Height</p>
          <p className={css.nameParam}>{camper.height}</p>
        </div>
        <div className={css.wrapperParam}>
          <p className={css.nameParam}>Tank</p>
          <p className={css.nameParam}>{camper.tank}</p>
        </div>
        <div className={css.wrapperParam}>
          <p className={css.nameParam}>Consumption</p>
          <p className={css.nameParam}>{camper.consumption}</p>
        </div>
      </div>
    </div>
  );
};
