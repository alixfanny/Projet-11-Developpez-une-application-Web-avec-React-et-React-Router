import '../style.css';
import image_acceuil from '../logo/image_accueil.jpg';
import Banniere from '../components/Banniere';
import Cards from '../components/Cards';

function Home() {
    return (
        <div className='container'>
            <Banniere imgSrc={image_acceuil} imgAlt="montagne verte et brune à côté d'un plan d'eau pendant la journée" pageType="home" />
            <p className='banniere-text'>Chez vous, partout et ailleurs</p>
            <div className='background-home'>
                <Cards />
            </div>
        </div>
    )
}

export default Home