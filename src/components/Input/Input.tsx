import React, { FC } from 'react';
import cx from 'classnames';
import './Input.scss';

type TProps = {
  [key: string]: any;
};

export const Input: FC<TProps> = props => (
  <input
    className={cx('input')}
    {...props}
  />
);
