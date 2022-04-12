import SearchIcon from '../../public/search.svg';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { SubmitButton } from './';

const ContactForm = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div>
        <h4 className="title">Stay in Touch</h4>

        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Name</label>
          <div className="row">
            <div className="half-row">
              <label className="sublabel">First Name</label>
              <input {...register('firstName')} />
            </div>
            <div className="spacer" />
            <div className="half-row">
              <label className="sublabel">Last Name</label>
              <input {...register('lastName')} />
            </div>
          </div>
          <label>Organization</label>
          <input {...register('organization')} />
          <label>Email</label>
          <input {...register('email', { required: true })} />
          {errors.email && <span>This field is required</span>}
          <div className="row submit-row">
            <SubmitButton />
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
          border: 2px solid var(--white);
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
};

export default ContactForm;
