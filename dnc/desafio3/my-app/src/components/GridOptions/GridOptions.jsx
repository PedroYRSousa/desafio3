import './GridOptions.scss'

function GridOptions() {
    return (
        <div className='d-grid al-center options'>
            <p className='t-new-item-grid'>Nova tarefa...</p>
            <div className='d-flex jc-end'>
                <button className='buttom' style={{ marginRight: '10px' }}>
                    <p className='t-plus-grid primary-color'>+</p>
                </button>
            </div>
        </div>
    )
}

export default GridOptions
