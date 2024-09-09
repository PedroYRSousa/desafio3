import PropTypes from 'prop-types';

import './GridListItens.scss'

// Components
import GridItem from '../GridItem/GridItem'

function GridListItens({ tasks, editItemCallback, removeItemCallback }) {
    return (
        <div className='grid-list-itens scroll'>
            {tasks.map((task, index) => <GridItem key={index} task={task} editItemCallback={() => editItemCallback(index)} removeItemCallback={() => removeItemCallback(index)} />)}
        </div>
    )
}

GridListItens.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.any),
    editItemCallback: PropTypes.func,
    removeItemCallback: PropTypes.func
};

export default GridListItens
