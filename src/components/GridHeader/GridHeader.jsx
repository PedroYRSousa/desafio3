import './GridHeader.scss'

function GridHeader() {
    return (
        <div className='fc-center grid'>
            <h2 className='t-title-grid grid-item'>Tarefa</h2>
            <h2 className='t-title-grid txa-center grid-item'>Status</h2>
            <h2 className='t-title-grid txa-end grid-item' >Opções</h2>
        </div>
    )
}

export default GridHeader
