import SearchIcon from '../../public/search.svg';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../../stores/store';
import { useState } from 'react';
import * as ga from '../../../lib/ga';
import SubmitButton from '../../Buttons/SubmitButton/SubmitButton';
import styles from './NewsletterSignupForm.module.css';
import classnames from 'classnames';
const cx = classnames.bind(styles);
export const light: ContactFormStyle = {
  backgroundColor: 'transparent',
  textColor: 'var(--white)',
};
export const dark: ContactFormStyle = {
  backgroundColor: 'var(--blueFive)',
  textColor: 'var(--black)',
};
export interface ContactFormStyle {
  backgroundColor: string;
  textColor: string;
}

const BasicContactForm = observer(() => {
  const store = useStore();
  const {
    dataStore: {
      setFirstName,
      setLastName,
      setEmail,
      setOrganization,
      formData,
      resetErrors,
    },
  } = store;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async () => {
    resetErrors();
    try {
      const response = await fetch('/api/addEmail', {
        method: 'POST',
        body: JSON.stringify(formData),
      });

      if (response.status === 401) {
        throw 'Email already subscribed';
      } else if (response.status === 400) {
        throw "Couldn't subscribe";
      }
      ga.event({
        action: 'mailing_list_subscription_success',
        params: {
          origin: 'footer',
        },
      });

      reset();
    } catch (err) {
      formData.errors.email = err;
    }
  };
  return (
    <>
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <label className={styles.label}>Name</label>
          <div className={styles.row}>
            <div className={styles.halfRow}>
              <label className={cx('label-small')}>First Name</label>
              <input
                className={styles.input}
                {...register('firstName')}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>

            <div className={styles.halfRow}>
              <label className={cx('label-small')}>Last Name</label>
              <input
                className={styles.input}
                {...register('lastName')}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <label className={styles.label}>Organization</label>
          <input
            className={styles.input}
            {...register('organization')}
            onChange={(e) => setOrganization(e.target.value)}
          />
          <label className={styles.label}>
            Email{' '}
            {errors.email && (
              <span className={cx('label-small', styles.errorMessage)}>
                This field is required
              </span>
            )}
          </label>
          <input
            className={styles.input}
            {...register('email', { required: true })}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className={(styles.row, styles.submitRow)}>
            {!errors.email && formData.errors.email && (
              <span className={cx('label-small', styles.errorMessage)}>
                {formData.errors.email}
              </span>
            )}

            <SubmitButton />
          </div>
        </form>
      </div>
    </>
  );
});

export default BasicContactForm;
