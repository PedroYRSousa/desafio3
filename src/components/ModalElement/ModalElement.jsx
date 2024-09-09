import PropTypes from 'prop-types';

import './ModalElement.scss'

function ModalElement({ title, task }) {
    return (
        <div className='modal-element'>
            <div className='modal-element-container'>
                <div className='t-modal-element-title modal-element-container-title'>
                    <h2>{title}</h2>
                </div>
                <div className='t-modal-element-task-description modal-element-container-task'>
                    <p>Nome: {task.name}</p>
                    <p>{task.status ? 'A tarefa foi concluída' : 'A tarefa não foi concluída'}</p>
                </div>
            </div>
        </div>
    )
}

ModalElement.propTypes = {
    title: PropTypes.string,
    task: PropTypes.object
};

export default ModalElement
