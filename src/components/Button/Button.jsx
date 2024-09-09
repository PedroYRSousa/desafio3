import PropTypes from 'prop-types';

import './Button.scss'

function Button({ children, callbackClick, primary = true }) {
    return (
        <div onClick={callbackClick} className={`t-button d-flex jc-center al-center button ${primary ? 'tertiary-background primary-color' : 'secondary-background secondary-color button-secondary'}`}>
            {children}
        </div>
    )
}

Button.propTypes = {
    children: PropTypes.any,
    callbackClick: PropTypes.func,
    primary: PropTypes.bool
};

export default Button
