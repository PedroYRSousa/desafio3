import './GridItem.scss'

// Entities
import Task from '../../entity/task'

// SVGs
import editSVG from '../../assets/edit.svg'
import deleteSVG from '../../assets/delete.svg'
import checkBoxSVG from '../../assets/check_box.svg'
import checkBoxBlankSVG from '../../assets/check_box_blank.svg'

function GridItem({ task }) {

    return (
        <div className='al-center d-grid grid-container-item'>
            <div className='d-flex grid-container-item-item'><p className='t-item-grid'>{task.name}</p></div>
            <div className='d-flex jc-center grid-container-item-item'>
                <button className='buttom grid-container-item-plus'>
                    <img src={task.status ? checkBoxSVG : checkBoxBlankSVG} />
                </button>
            </div>
            <div className='d-flex jc-end grid-container-item-item'>
                <div>
                    <button className='buttom grid-container-item-option'>
                        <img src={editSVG} />
                    </button>
                </div>
                <div>
                    <button className='buttom grid-container-item-option'>
                        <img src={deleteSVG} />
                    </button>
                </div>
            </div>
        </div>
    )
}

GridItem.propTypes = {
    task: Task,
};

export default GridItem
