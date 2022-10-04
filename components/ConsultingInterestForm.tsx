import SearchIcon from '../../public/search.svg';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { SubmitButton } from './Footer';
import { observer } from 'mobx-react-lite';
import { useStore } from '../stores/store';
import { useState } from 'react';
import * as ga from '../lib/ga';
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

const ConsultingInterestForm = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await fetch('/api/consultingForm', {
        method: 'POST',
        body: JSON.stringify(data),
      });
      setFormSubmitted(true);
    } catch (e) {}
  };
  return (
    <>
      {!formSubmitted ? (
        <div className="form-container">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>
              Name{' '}
              {errors.name && (
                <span className="error-message label-small">
                  This field is required
                </span>
              )}
            </label>
            <input {...register('name', { required: true })} />
            <label>
              Organization{' '}
              {errors.organization && (
                <span className="error-message label-small">
                  This field is required
                </span>
              )}
            </label>
            <input {...register('organization', { required: true })} />
            <label>
              Email{' '}
              {errors.email && (
                <span className="error-message label-small">
                  This field is required
                </span>
              )}
            </label>
            <input {...register('email', { required: true })} />
            <label>
              In a few words, what kind of consulting are you looking for?{' '}
            </label>

            <textarea {...register('description')}></textarea>
            <label> Do you have a consulting budget? </label>

            <div className="row">
              <select {...register('budget')}>
                <option value="yes">yes</option>
                <option value="no">no</option>
              </select>
            </div>

            <div className="row submit-row">
              <SubmitButton formSubmitted={formSubmitted} />
            </div>
          </form>
        </div>
      ) : (
        <div className="form-submitted">
          Thanks for reaching out, we will be in touch soon.
        </div>
      )}

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
          width: 100%;
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
          color: var(--pink);
          margin-left: 0.3125rem;
        }
        .form-error-message {
          color: var(--yellow);
          width: 100px;
          position: absolute;
          left: 0;
        }
        input,
        textarea {
          text-transform: uppercase;
          font-family: var(--flexa);

          font-size: 16px;
          font-variation-settings: 'wght' 400, 'wdth' 90;

          padding: 16px 8px;
          font-style: normal;
          font-weight: 100;
          line-height: 18px;
          letter-spacing: 0em;

          text-align: left;
          color: var(--white);
          border: 0;
          border-radius: 0;
          width: 100%;
          background-color: transparent;
          color: var(--black);
          border: 2px solid var(--black);
          margin-bottom: 1.25rem;
        }

        select {
          padding: 16px 8px;
          background-color: transparent;
          border: 2px solid var(--black);
          text-align: left;
          font-style: normal;
          font-weight: 100;
          line-height: 18px;
          letter-spacing: 0em;
          font-size: 16px;
          font-variation-settings: 'wght' 400, 'wdth' 90;
          text-transform: uppercase;
          font-family: var(--flexa);
          -webkit-appearance: none;
          -moz-appearance: none;
          background: transparent;

          background-image: url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
          background-repeat: no-repeat;
          background-position-x: 85%;
          background-position-y: 45%;
          margin-right: 2rem;
          padding: 1rem;
          padding-right: 2rem;
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
        .form-container {
          grid-column: 1/-1;

          display: flex;
          justify-content: center;
          margin-bottom: 5rem;
        }
        form {
          max-width: 800px;
        }
        .form-submitted {
          grid-column: 2/4;

          margin: 2.5rem 0;
        }
        @media only screen and (max-width: 768px) {
          input {
            color: var(--black);
            font-size: 16px;
          }
          .form-submitted {
            grid-column: 1/-1;
            padding: 0 1.25rem;
            margin: 2.5rem 0;
          }
        }
      `}</style>
    </>
  );
};

export default ConsultingInterestForm;
