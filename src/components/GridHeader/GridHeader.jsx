import './GridHeader.scss'

function GridHeader() {
    return (
        <div className='d-grid jc-center grid-header'>
            <h2 className='t-title-grid grid-header-item'>Tarefa</h2>
            <h2 className='txa-center t-title-grid grid-header-item'>Status</h2>
            <h2 className='txa-end t-title-grid grid-header-item' >Opções</h2>
        </div>
    )
}

export default GridHeader
