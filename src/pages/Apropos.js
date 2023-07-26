import '../style.css';
import '../reset.css';
import image_apropos from '../logo/image_apropos.jpg'
import Banniere from '../components/Banniere';

function Apropos() {
    return (
        <div>
            <Banniere imgSrc={image_apropos} imgAlt="montagne verte à travers le plan d'eau" />
        </div>
    )
}

export default Apropos