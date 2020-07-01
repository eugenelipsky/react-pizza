import React from "react";
import PropTypes from 'prop-types';
import classNames from 'classnames'

const Button = ({onCLick, className, outline, children}) => {
    return (
        <button
            onClick={onCLick}
            className={classNames('button', className, {
            'button--outline': outline
        })}>{children}</button>
    )
}

Button.propTypes = {
    onClick: PropTypes.func
}

export default Button;