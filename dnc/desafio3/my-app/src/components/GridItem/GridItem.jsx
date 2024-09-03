import './GridItem.scss'

// SVGs
import editSVG from '../../assets/edit.svg';
import deleteSVG from '../../assets/delete.svg';
import checkBoxSVG from '../../assets/check_box.svg';

function GridItem() {
    return (
        <div style={{ width: '647px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'start' }}><p className='t-item-grid'>Nome</p></div>
            <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'center' }}><button className='buttom'><img src={checkBoxSVG} style={{ width: '24px', height: '24px' }} /></button></div>
            <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'end' }}>
                <div><button className='buttom'><img src={editSVG} style={{ width: '35px', height: '30px' }} /></button></div>
                <div><button className='buttom'><img src={deleteSVG} style={{ width: '35px', height: '30px' }} /></button></div>
            </div>
        </div>
    )
}

export default GridItem
