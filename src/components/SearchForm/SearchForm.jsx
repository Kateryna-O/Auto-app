import { useForm } from 'react-hook-form';
import sprite from '../../assets/icon/sprite.svg';
import css from './SearchForm.module.css';

export const SearchForm = () => {
  const { register, handleSubmit, setValue, watch } = useForm({
    mode: 'onTouched',
  });

  const handleCheckboxChange = event => {
    const { id, checked } = event.target;
    setValue(id, checked);
  };

  const isACChecked = watch('AC', false);
  const isTransmissionChecked = watch('transmission', false);
  const isKitchenChecked = watch('kitchen', false);
  const isTVChecked = watch('TV', false);
  const isBathroomChecked = watch('bathroom', false);
  const selectedVehicleType = watch('form', '');

  return (
    <form
      onSubmit={handleSubmit(data => console.log(data))}
      className={css.form}
    >
      <div className={css.wrapperLocation}>
        <label htmlFor="location" className={css.labelLocation}>
          Location
        </label>
        <svg className={css.iconMap}>
          <use href={`${sprite}#icon-Map`} />
        </svg>
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
            className={`${css.labelCheck} ${isACChecked ? css.active : ''}`}
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
            className={`${css.labelCheck} ${isTransmissionChecked ? css.active : ''}`}
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
            className={`${css.labelCheck} ${isKitchenChecked ? css.active : ''}`}
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
            className={`${css.labelCheck} ${isTVChecked ? css.active : ''}`}
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
            className={`${css.labelCheck} ${isBathroomChecked ? css.active : ''}`}
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
            className={`${css.labelCheck} ${selectedVehicleType === 'Van' ? css.active : ''}`}
          >
            <input
              type="radio"
              name="form"
              id="Van"
              value="Van"
              {...register('form')}
              className={css.hiddenCheckbox}
            />
            <svg className={css.icon}>
              <use href={`${sprite}#icon-grid2`}></use>
            </svg>
            Van
          </label>

          <label
            className={`${css.labelCheck} ${css.minMargin} ${selectedVehicleType === 'FullyIntegrated' ? css.active : ''}`}
          >
            <input
              type="radio"
              name="form"
              id="FullyIntegrated"
              value="FullyIntegrated"
              {...register('form')}
              className={css.hiddenCheckbox}
            />
            <svg className={css.icon}>
              <use href={`${sprite}#icon-grid`}></use>
            </svg>
            Fully Integrated
          </label>

          <label
            className={`${css.labelCheck} ${selectedVehicleType === 'Alcove' ? css.active : ''}`}
          >
            <input
              type="radio"
              name="form"
              id="Alcove"
              value="Alcove"
              {...register('form')}
              className={css.hiddenCheckbox}
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
