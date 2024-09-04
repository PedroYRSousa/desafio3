import PropTypes from 'prop-types';

import './GridListItens.scss'

// Components
import GridItem from '../GridItem/GridItem'

function GridListItens({ tasks, removeItemCallback }) {
    return (
        <div className='grid-list-itens scroll'>
            {tasks.map((task, index) => <GridItem key={index} task={task} removeItemCallback={() => removeItemCallback(index)} />)}
        </div>
    )
}

GridListItens.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.any),
    removeItemCallback: PropTypes.func
};

export default GridListItens
