import { useForm } from 'react-hook-form';
import css from './ReservationForm.module.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

export const ReservationForm = () => {
  const validSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Name must be at least 3 characters')
      .max(50, 'Name must not exceed 50 characters')
      .required('Name is required'),
    email: Yup.string()
      .email('Please enter a valid email address')
      .required('Email is required'),
    date: Yup.date()
      .required('Booking date is required')
      .nullable()
      .typeError('Invalid date format'),
    comment: Yup.string().max(500, 'Comment must not exceed 500 characters'),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onTouched',
    resolver: yupResolver(validSchema),
  });

  const onSubmit = data => {
    console.log(data);

    toast.success('The camper has been successfully booked!', {
      position: 'top-center',
      autoClose: 3000,
    });
    reset();
  };
  return (
    <div className={css.wrapperForm}>
      <h3 className={css.title}>Book your campervan now</h3>
      <p className={css.text}>
        Stay connected! We are always ready to help you.
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className={css.registerForm}>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name*"
          {...register('name')}
          className={css.inputs}
        />
        {errors.name && <p className={css.error}>{errors.name.message}</p>}
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email*"
          {...register('email')}
          className={css.inputs}
        />
        {errors.email && <p className={css.error}>{errors.email.message}</p>}
        <input
          type="date"
          id="date"
          name="date"
          placeholder="Booking date*"
          {...register('date')}
          className={css.inputs}
        />
        {errors.date && <p className={css.error}>{errors.date.message}</p>}
        <textarea
          rows="10"
          id="comment"
          name="comment"
          placeholder="Comment"
          {...register('comment')}
          className={`${css.inputs} ${css.textarea}`}
        />
        {errors.comment && (
          <p className={css.error}>{errors.comment.message}</p>
        )}

        <button type="submit" className={css.buttonSend}>
          Send
        </button>
        <ToastContainer />
      </form>
    </div>
  );
};
