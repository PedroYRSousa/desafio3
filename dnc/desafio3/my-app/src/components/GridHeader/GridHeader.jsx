import './GridHeader.scss'

function GridHeader() {
    return (
        <div style={{ width: '656px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', justifyContent: 'center' }}>
            <h2 className='t-title-grid' style={{ textAlign: 'start', width: '100%' }}>Tarefa</h2>
            <h2 className='t-title-grid' style={{ textAlign: 'center', width: '100%' }}>Status</h2>
            <h2 className='t-title-grid' style={{ textAlign: 'end', width: '100%' }} >Opções</h2>
        </div>
    )
}

export default GridHeader
