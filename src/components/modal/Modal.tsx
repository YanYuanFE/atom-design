import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import './modal.less';

interface ModalProps {
    visible?: boolean;
    className?: string;
    children?: React.ReactNode,
    width?: string | number;
}
const Modal = ({visible, className, children}: ModalProps) => {
    if (!visible) return null;
    const prefixCls = 'atom-modal';
    const classes = classNames(prefixCls, className);
    return ReactDOM.createPortal(
        <div>
            <div className={`${prefixCls}-mask`}></div>
            <div className={classes}>{children}</div>
        </div>,
        document.body
    )
}

export default Modal;