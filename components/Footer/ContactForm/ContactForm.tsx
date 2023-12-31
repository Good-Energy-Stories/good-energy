import { useForm } from 'react-hook-form';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../../stores/store';
import { useState } from 'react';
import * as ga from '../../../lib/ga';
import SubmitButton from './SubmitButton';
import styles from './ContactForm.module.css';
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

const ContactForm = observer(({ inFooter }: { inFooter?: boolean }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
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
      setFormSubmitted(true);
    } catch (err) {
      formData.errors.email = err;
    }
  };
  return (
    <>
      <div className={styles.container}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className={styles.label}>Name</label>
          <div className={styles.row}>
            <div className={styles.halfRow}>
              <label className={styles.sublabel}>First Name</label>
              <input
                className={styles.input}
                {...register('firstName')}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className={styles.halfRow}>
              <label className={styles.sublabel}>Last Name</label>
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
              <span className="error-message label-small">
                This field is required
              </span>
            )}
          </label>
          <input
            className={styles.input}
            {...register('email', { required: true })}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className={cx(styles.row, styles.submitRow)}>
            {!errors.email && formData.errors.email && (
              <span className="form-error-message label-small">
                {formData.errors.email}
              </span>
            )}

            <SubmitButton formSubmitted={formSubmitted} />
          </div>
        </form>
      </div>
    </>
  );
});

export default ContactForm;
