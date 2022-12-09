import React, { useState } from 'react';
import styles from './LoginComponent.module.css';

export interface LoginComponentProps {
  apiUrl?: string;
  backUrl?: string;
  /* @default #01EDBC */
  buttonBackgroundColor?: string;
  /* @default #111 */
  buttonColor?: string;
  logo?: string;
}

export const LoginComponent = ({
  apiUrl,
  backUrl,
  logo,
}: LoginComponentProps) => {
  const [isBusy, setBusy] = useState(false);
  const [error, setError] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (isBusy) {
      return;
    }

    setBusy(true);
    setError('');

    try {
      const form = document.querySelector(
        '#password-form form',
      ) as HTMLFormElement;

      const formData = new FormData(form);

      const res = await fetch(apiUrl || `/api/login`, {
        method: 'post',
        credentials: 'include',
        body: JSON.stringify({ password: formData.get('password') }),
        headers: { 'Content-Type': 'application/json' },
      });

      const { message } = await res.json();

      if (res.status === 200) {
        window.location.reload();
      } else {
        setError(message);
        setBusy(false);
      }
    } catch (e) {
      setError('An error has occured.');
      setBusy(false);
    }

    return false;
  };

  const image = !!logo && (
    <img
      width="130"
      height="auto"
      src={logo}
      alt="Logo"
      style={{ marginBottom: '40px' }}
    />
  );

  return (
    <div className={styles.container}>
      <div className={styles.container__inner}>
        <style
          dangerouslySetInnerHTML={{
            __html: `
           
            body {
              margin: 0;
            }
            * {
              box-sizing: border-box;
            }
            #password-form * {
              font-family: Pressura, sans-serif;
            }
            #password-form h1 {
              text-transform: uppercase;
              font-family: FlexaVar, sans-serif;
              font-variation-settings: 'wght' 800;
            }
            #password-form {
              padding: 40px;
            }
            @media (max-width: 767px) {
              #password-form {
                padding: 32px 16px;
              }
            }
            #password-form .invalid {
              outline: auto 1px;
              outline-color: #DD4A4A;
              animation: shake .4s linear;
            }
            #password-form .error {
              color: #DD4A4A;
              margin-top: 12px;
              font-size: 18px;
            }
            @keyframes shake {
              8%, 41% {
                transform: translateX(-10px);
              }
              25%, 58% {
                transform: translateX(10px);
              }
              75% {
                transform: translateX(-5px);
              }
              92% {
                transform: translateX(5px);
              }
              0%, 100% {
                transform: translateX(0);
              }
            }
          `,
          }}
        />

        {!!image && <>{backUrl ? <a href={backUrl}>{image}</a> : image}</>}
        <div id="password-form" className={styles.form__container}>
          <form data-testid="form" onSubmit={onSubmit}>
            <label htmlFor="password">Password</label>
            <input
              className={error ? 'invalid' : ''}
              name="password"
              type="password"
              id="password"
              placeholder="Enter password..."
              required
            />
            {!!error && (
              <div className="error" data-testid="error">
                {error}
              </div>
            )}

            <button type="submit" disabled={isBusy} className={styles.button}>
              <span> {isBusy ? 'Logging in...' : 'Login'}</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
