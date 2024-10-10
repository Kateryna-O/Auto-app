import css from './Hero.module.css';
export const Hero = () => {
  return (
    <div className={css.fon}>
      <div className={css.wrapper}>
        <h1 className={css.title}>Campers of your dreams</h1>
        <h2 className={css.text}>
          You can find everything you want in our catalog
        </h2>
        <button type="button" className={css.button}>
          View Now
        </button>
      </div>
    </div>
  );
};
