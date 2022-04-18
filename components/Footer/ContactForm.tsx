import SearchIcon from '../../public/search.svg';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { SubmitButton } from './';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../stores/store';
import { useState } from 'react';
import * as ga from '../../lib/ga';
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

const ContactForm = observer(({ mode = dark }: { mode: ContactFormStyle }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const store = useStore();
  const {
    dataStore: {
      setFirstName,
      setLastName,
      setEmail,
      setOrganization,
      formData,
      formValidForSubmit,
      resetErrors,
    },
    uiStore: { setSubscribeFormSubmitted },
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
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Name</label>
          <div className="row">
            <div className="half-row">
              <label className="sublabel">First Name</label>
              <input
                {...register('firstName')}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="spacer" />
            <div className="half-row">
              <label className="sublabel">Last Name</label>
              <input
                {...register('lastName')}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <label>Organization</label>
          <input
            {...register('organization')}
            onChange={(e) => setOrganization(e.target.value)}
          />
          <label>
            Email{' '}
            {errors.email && (
              <span className="error-message label-small">
                This field is required
              </span>
            )}
          </label>
          <input
            {...register('email', { required: true })}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="row submit-row">
            {!errors.email && formData.errors.email && (
              <span className="form-error-message label-small">
                {formData.errors.email}
              </span>
            )}

            <SubmitButton formSubmitted={formSubmitted} />
          </div>
        </form>
      </div>
      <style jsx>{`
        .row {
          display: flex;
        }
        .half-row {
          width: 100%;
        }
        .submit-row {
          justify-content: flex-end;
          position: relative;
        }
        .spacer {
          width: 2.5rem;
        }
        label {
          font-family: var(--flexa);
          font-size: 18px;
          font-style: normal;
          font-weight: 100;
          line-height: 32px;
          letter-spacing: 0em;
          text-align: left;
          text-transform: uppercase;
          color: (--white);
          font-variation-settings: 'wght' 450, 'wdth' 50;
        }
        .sublabel {
          font-family: var(--flexa-mono);

          font-size: 10px;
          font-style: normal;
          font-weight: 300;
          line-height: 28px;
          color: (--white);

          text-align: left;
        }
        .error-message {
          color: var(--yellow);
          margin-left: 0.3125rem;
        }
        .form-error-message {
          color: var(--yellow);
          width: 100px;
          position: absolute;
          left: 0;
        }
        input {
          text-transform: uppercase;
          font-family: var(--flexa);

          font-size: 14px;
          padding: 6px;
          font-style: normal;
          font-weight: 100;
          line-height: 18px;
          letter-spacing: 0em;

          text-align: left;
          color: var(--white);
          border: 0;
          width: 100%;
          background-color: transparent;
          border: 2px solid ${mode.textColor};
          margin-bottom: 1.25rem;
        }
        ::placeholder {
          color: var(--white);
        }

        :-ms-input-placeholder {
          color: var(--white);
        }

        ::-ms-input-placeholder {
          color: var(--white);
        }

        .title {
          margin-bottom: 1.25rem;
        }
      `}</style>
    </>
  );
});

export default ContactForm;
