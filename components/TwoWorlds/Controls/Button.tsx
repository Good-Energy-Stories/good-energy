import React from 'react';
import styles from './Button.module.css';
import classnames from 'classnames';
const cx = classnames.bind(styles);

const Button = (
  props: {
    label: string;
    className?: string;
  } & React.HTMLProps<HTMLButtonElement>,
) => {
  const { label, onClick, className, disabled } = props;
  return (
    <button
      className={cx(styles.container, 'button-text-large', className)}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
