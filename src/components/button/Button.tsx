import React from 'react';
import classNames from 'classnames';
import './button.less';

type ButtonType = '' | 'primary' | 'success' | 'danger' | 'dashed';

type ButtonSize = 'default' | 'small' | 'large';

type ButtonShape = 'circle' | 'circle-outline' | 'round';

type ButtonHTMLType = 'button' | 'submit' | 'reset';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler;
  type?: ButtonType;
  className?: string;
  htmlType?: ButtonHTMLType,
  size?: ButtonSize,
  shape?: ButtonShape,
  ghost?: boolean,
  disabled?: boolean
}

const Button = ({ children, onClick, className, type, htmlType = 'button', size = 'default', ghost, disabled, shape } : ButtonProps) => {
  const prefixCls = `atom-btn`;
  const classes = classNames(prefixCls, className, {
    [`${prefixCls}-${type}`]: type,
    [`${prefixCls}-${size}`]: size,
    [`${prefixCls}-${shape}`]: shape,
    [`${prefixCls}-ghost`]: ghost,
  });
  return (
    <button onClick={onClick} className={classes} type={htmlType} disabled={disabled}>
      {children}
    </button>
  )
};

export default Button;
