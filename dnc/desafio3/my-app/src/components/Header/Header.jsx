import './Header.scss'

function Header() {
    return (
        <header className='header'>
            <div className='tertiary-background al-end header-container'>
                <div className='header-container-organization'>
                    <h1 className='t-header primary-color header-container-organization-text'>Organização</h1>
                </div>
                <div className='secondary-background header-container-tasks'>
                    <h1 className='t-header tertiary-color header-container-tasks-text'>Tarefas</h1>
                </div>
            </div>
        </header>
    )
}

export default Header
