import PropTypes from 'prop-types';

import './GridOptions.scss'

function GridOptions({ newItemCallback }) {
    return (
        <div className='d-grid al-center options'>
            <p className='t-new-item-grid'>Nova tarefa...</p>
            <div className='d-flex jc-end'>
                <button className='buttom options-plus'>
                    <p onClick={newItemCallback} className='t-plus-grid primary-color'>+</p>
                </button>
            </div>
        </div>
    )
}

GridOptions.propTypes = {
    newItemCallback: PropTypes.func,
};

export default GridOptions
