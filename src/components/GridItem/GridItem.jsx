import { useState } from 'react';
import PropTypes from 'prop-types';

import './GridItem.scss'

// SVGs
import editSVG from '../../assets/edit.svg'
import deleteSVG from '../../assets/delete.svg'
import checkBoxSVG from '../../assets/check_box.svg'
import checkBoxBlankSVG from '../../assets/check_box_blank.svg'

function GridItem({ task, removeItemCallback }) {
    const [name, ] = useState(task.name)
    const [status, setStatus] = useState(task.status)

    const editStatus = () => {
        task.status = !task.status
        setStatus(task.status)
    }

    const edit = () => {

    }

    const remove = () => {
        removeItemCallback();
    }

    return (
        <div className='al-center d-grid grid-container-item'>
            <div className='d-flex grid-container-item-item'>
                <p className='t-item-grid grid-container-item-item-name'>
                    {name}
                </p>
            </div>
            <div className='d-flex jc-center grid-container-item-item'>
                <button onClick={editStatus} className='buttom grid-container-item-plus'>
                    <img src={status ? checkBoxSVG : checkBoxBlankSVG} />
                </button>
            </div>
            <div className='d-flex jc-end grid-container-item-item'>
                <div>
                    <button onClick={edit} className='buttom grid-container-item-option'>
                        <img src={editSVG} />
                    </button>
                </div>
                <div>
                    <button onClick={remove} className='buttom grid-container-item-option'>
                        <img src={deleteSVG} />
                    </button>
                </div>
            </div>
        </div>
    )
}

GridItem.propTypes = {
    task: PropTypes.any,
    removeItemCallback: PropTypes.func
};

export default GridItem
