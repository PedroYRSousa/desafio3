import './Main.scss'

// Components
import GridOptions from '../GridOptions/GridOptions';
import GridHeader from '../GridHeader/GridHeader';
import GridItem from '../GridItem/GridItem';
import Separator from '../Separator/Separator';

function Main() {
    return (
        <main className='d-flex al-center fc-center main-container'>
            <section>
                <h1 className='t-header-grid header-grid'>Otimize seu tempo e se organize com o nosso Planejador Diário.</h1>

                <div className='d-flex al-center grid'>
                    <GridHeader />
                    <Separator />
                    <GridItem />
                    <GridOptions />
                </div>
            </section>
        </main>
    )
}

export default Main
