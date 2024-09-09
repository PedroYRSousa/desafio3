import PropTypes from 'prop-types';

import './Modal.scss'

// Components
import Button from '../Button/Button'

function Modal({ children, isOpen, setIsOpen }) {
    if (!isOpen) return;

    const close = ({ target }) => {
        if (target.classList.value !== 'd-flex jc-center al-center modal') return;

        setIsOpen();
    }

    const no = () => {
        setIsOpen();
    }

    const yes = () => {
        setIsOpen();
    }

    return (
        <div className='d-flex jc-center al-center modal' onClick={close}>
            <div className='d-flex-column secondary-background secondary-color modal-container'>
                <div className='d-flex jc-center al-center modal-container-element'>
                    {children}
                </div>
                <div className='d-flex jc-center al-center modal-container-options'>
                    <Button callbackClick={no}>Não</Button>
                    <Button callbackClick={yes} primary={false}>Sim</Button>
                </div>
            </div>
        </div>
    )
}

Modal.propTypes = {
    children: PropTypes.element,
    isOpen: PropTypes.bool,
    setIsOpen: PropTypes.func,
    callbackNo: PropTypes.func,
    callbackYes: PropTypes.func
};

export default Modal
