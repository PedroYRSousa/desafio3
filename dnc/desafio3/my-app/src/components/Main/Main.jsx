import './Main.scss'

// Components
import GridOptions from '../GridOptions/GridOptions';
import GridHeader from '../GridHeader/GridHeader';
import GridItem from '../GridItem/GridItem';
import Separator from '../Separator/Separator';

function Main() {
    return (
        <main style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <section>
                <h1 className='t-header-grid' style={{ marginBottom: '126px' }}>Otimize seu tempo e se organize com o nosso Planejador Diário.</h1>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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
