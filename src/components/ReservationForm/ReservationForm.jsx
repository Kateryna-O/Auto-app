import { useForm } from 'react-hook-form';
import css from './ReservationForm.module.css';


export const ReservationForm = () => {
  const { register, handleSubmit } = useForm({
    mode: 'onTouched',
  });

  return (
    <div className={css.wrapperForm}>
      <h3 className={css.title}>Book your campervan now</h3>
      <p className={css.text}>
        Stay connected! We are always ready to help you.
      </p>
      <form
        onSubmit={handleSubmit(data => console.log(data))}
        className={css.registerForm}
      >
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name*"
          {...register('name')}
          className={css.inputs}
        />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email*"
          {...register('email')}
          className={css.inputs}
        />
        <input
          type="date"
          id="date"
          name="date"
          placeholder="Booking date*"
          {...register('date')}
          className={css.inputs}
        />
        <textarea
          rows="10"
          id="comment"
          name="comment"
          placeholder="Comment"
          {...register('comment')}
          className={`${css.inputs} ${css.textarea}`}
        />

        <button type="submit" className={css.buttonSend}>
          Send
        </button>
      </form>
    </div>
  );
};
