import { useForm } from 'react-hook-form';
import sprite from '../../assets/icon/sprite.svg';
import css from './SearchForm.module.css';
import { useState } from 'react';

export const SearchForm = () => {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm({ mode: 'onTouched' });

  const [activeCheckboxes, setActiveCheckboxes] = useState({});

  const handleCheckboxChange = event => {
    const { id, checked } = event.target;
    setActiveCheckboxes(prev => ({
      ...prev,
      [id]: checked,
    }));
  };

  return (
    <form
      onSubmit={handleSubmit(data => console.log(data))}
      className={css.fomr}
    >
      <div className={css.wrapperLocation}>
        <label htmlFor="location" className={css.labelLocation}>
          Location
        </label>
        <input
          type="text"
          id="location"
          name="location"
          placeholder="Kyiv, Ukraine"
          {...register('location')}
          className={css.location}
        />
      </div>
      <h3 className={css.labelFilters}>Filters</h3>
      <div>
        <h2 className={css.subtitle}>Vehicle equipment</h2>
        <hr className={css.line} />
        <div className={css.wrapperVehicle}>
          <label
            className={`${css.labelCheck} ${activeCheckboxes.AC ? css.active : ''}`}
          >
            <input
              type="checkbox"
              name="checkboxVehicle"
              id="AC"
              {...register('AC')}
              className={css.hiddenCheckbox}
              onChange={handleCheckboxChange}
            />
            <svg className={css.icon}>
              <use href={`${sprite}#icon-wind`}></use>
            </svg>
            AC
          </label>
          <label
            className={`${css.labelCheck} ${activeCheckboxes.transmission ? css.active : ''}`}
          >
            <input
              type="checkbox"
              name="checkboxVehicle"
              id="transmission"
              {...register('transmission')}
              className={css.hiddenCheckbox}
              onChange={handleCheckboxChange}
            />
            <svg className={css.icon}>
              <use href={`${sprite}#icon-diagram`}></use>
            </svg>
            Automatic
          </label>
          <label
            className={`${css.labelCheck} ${activeCheckboxes.kitchen ? css.active : ''}`}
          >
            <input
              type="checkbox"
              name="checkboxVehicle"
              id="kitchen"
              {...register('kitchen')}
              className={css.hiddenCheckbox}
              onChange={handleCheckboxChange}
            />
            <svg className={css.icon}>
              <use href={`${sprite}#icon-cup`}></use>
            </svg>
            Kitchen
          </label>
          <label
            className={`${css.labelCheck} ${activeCheckboxes.TV ? css.active : ''}`}
          >
            <input
              type="checkbox"
              name="checkboxVehicle"
              id="TV"
              {...register('TV')}
              className={css.hiddenCheckbox}
              onChange={handleCheckboxChange}
            />
            <svg className={css.icon}>
              <use href={`${sprite}#icon-computer`}></use>
            </svg>
            TV
          </label>
          <label
            className={`${css.labelCheck} ${activeCheckboxes.bathroom ? css.active : ''}`}
          >
            <input
              type="checkbox"
              name="checkboxVehicle"
              id="bathroom"
              {...register('bathroom')}
              className={css.hiddenCheckbox}
              onChange={handleCheckboxChange}
            />
            <svg className={css.icon}>
              <use href={`${sprite}#icon-droplet`}></use>
            </svg>
            Bathroom
          </label>
        </div>
      </div>
      <div>
        <h2 className={css.subtitle}>Vehicle type</h2>
        <hr className={css.line} />
        <div className={css.wrapperType}>
          <label
            className={`${css.labelCheck} ${activeCheckboxes.Van ? css.active : ''}`}
          >
            <input
              type="checkbox"
              name="checkboxVehicleType"
              id="Van"
              {...register('Van')}
              className={css.hiddenCheckbox}
              onChange={handleCheckboxChange}
            />
            <svg className={css.icon}>
              <use href={`${sprite}#icon-grid2`}></use>
            </svg>
            Van
          </label>
          <label
            className={`${css.labelCheck} ${css.minMargin}  ${activeCheckboxes.FullyIntegrated ? css.active : ''}`}
          >
            <input
              type="checkbox"
              name="checkboxVehicleType"
              id="FullyIntegrated"
              {...register('FullyIntegrated')}
              className={css.hiddenCheckbox}
              onChange={handleCheckboxChange}
            />
            <svg className={css.icon}>
              <use href={`${sprite}#icon-grid`}></use>
            </svg>
            Fully Integrated
          </label>
          <label
            className={`${css.labelCheck} ${activeCheckboxes.Alcove ? css.active : ''}`}
          >
            <input
              type="checkbox"
              name="checkboxVehicleType"
              id="Alcove"
              {...register('Alcove')}
              className={css.hiddenCheckbox}
              onChange={handleCheckboxChange}
            />
            <svg className={css.icon}>
              <use href={`${sprite}#icon-grid3`}></use>
            </svg>
            Alcove
          </label>
        </div>
      </div>
      <button type="submit" className={css.submitButton}>
        Search
      </button>
    </form>
  );
};
