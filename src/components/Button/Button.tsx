import React, { FC } from 'react';
import cx from 'classnames';
import './Button.scss';

type TProps = {
  [key: string]: any;
};

export const Button: FC<TProps> = ({
  className,
  children,
  ...props
}) => (
  <button
    type="button"
    className={cx('button', className)}
    {...props}
  >
    {children}
  </button>
);
