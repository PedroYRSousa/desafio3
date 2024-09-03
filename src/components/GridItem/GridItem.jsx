import './GridItem.scss'

// SVGs
import editSVG from '../../assets/edit.svg'
import deleteSVG from '../../assets/delete.svg'
import checkBoxSVG from '../../assets/check_box.svg'

function GridItem() {
    return (
        <div className='al-center d-grid grid-container-item'>
            <div className='d-flex grid-container-item-item'><p className='t-item-grid'>Nome</p></div>
            <div className='d-flex jc-center grid-container-item-item'>
                <button className='buttom grid-container-item-plus'>
                    <img src={checkBoxSVG} />
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

export default GridItem
