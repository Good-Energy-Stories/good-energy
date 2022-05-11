import { Copyright, ContactForm } from './';
import { light } from './ContactForm';
import Socials from './Socials';

const RightBottom = () => {
  return (
    <div>
      <Socials />
      <Copyright />
      <style jsx>{`
        div {
          width: 100%;
          display: flex;

          align-items: center;
          justify-content: space-between;
        }
        @media only screen and (max-width: 768px) {
          div {
          }
        }
      `}</style>
    </div>
  );
};

const Right = ({
  includeContactForm = true,
}: {
  includeContactForm?: boolean;
}) => {
  return (
    <div>
      {includeContactForm && (
        <>
          <h4 className="title">Stay in Touch</h4>
          <ContactForm mode={light} inFooter />
        </>
      )}
      <RightBottom />
      <style jsx>{`
        h4 {
          margin-bottom: 1.25rem;
        }
        div {
          grid-column-start: 3;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-end;
        }
        @media only screen and (max-width: 768px) {
          div {
            grid-column-start: 1;
            grid-row-start: 2;
          }
        }
      `}</style>
    </div>
  );
};

export default Right;
