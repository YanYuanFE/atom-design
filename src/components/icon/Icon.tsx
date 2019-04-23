import React from 'react';
import classNames from 'classnames';
import './less/font-awesome.less';

interface IconProps {
    type: string;
    className?: string;
}

const Icon = ({type, className}: IconProps) => {
    const prefixCls = `atom-icon`;
    const classes = classNames(prefixCls, className, {
        [`fa fa-${type}`]: type
    })
    return <i className={classes} />
}

export default Icon;