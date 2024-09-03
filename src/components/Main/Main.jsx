import './Main.scss'

// Components
import GridItem from '../GridItem/GridItem';
import Separator from '../Separator/Separator';
import GridHeader from '../GridHeader/GridHeader';
import GridOptions from '../GridOptions/GridOptions';

function Main() {
    return (
        <main className='d-flex al-center jc-center main-container'>
            <section>
                <h1 className='t-header-grid header-grid'>Otimize seu tempo e se organize com o nosso Planejador Diário.</h1>

                <div className='d-flex al-center grid-container'>
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
