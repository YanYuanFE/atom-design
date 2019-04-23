import React from 'react';
import classNames from 'classnames';
import './input.less';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    
}

const Input = ({className, ...rest }: InputProps) => {
    const prefixCls = 'atom-input';
    const classes = classNames(prefixCls, className, {

    });
    return (
        <input className={classes} {...rest}  />
    )
}

export default Input;