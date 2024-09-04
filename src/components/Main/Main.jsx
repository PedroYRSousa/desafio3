import { useState } from 'react'

import './Main.scss'

// Components
import GridListItens from '../GridListItens/GridListItens'
import Separator from '../Separator/Separator'
import GridHeader from '../GridHeader/GridHeader'
import GridOptions from '../GridOptions/GridOptions'

// Mock
import TasksMock from '../../mock.json'


function Main() {
    const [tasks, setTasks] = useState([TasksMock[0], TasksMock[1]]);

    const newItem = () => {
        const newTask = TasksMock[Math.floor(Math.random() * (TasksMock.length - 1))]

        setTasks([...tasks, newTask]);
    }

    const removeItem = (index) => {
        setTasks(tasks.filter((_, i) => i != index));
    }

    return (
        <main className='d-flex al-center jc-center main-container'>
            <section>
                <h1 className='t-header-grid header-grid'>Otimize seu tempo e se organize com o nosso Planejador Diário.</h1>

                <div className='d-flex al-center grid-container'>
                    <GridHeader />
                    <Separator />
                    <GridListItens tasks={tasks} removeItemCallback={removeItem} />
                    <GridOptions newItemCallback={newItem} />
                </div>
            </section>
        </main>
    )
}

export default Main
