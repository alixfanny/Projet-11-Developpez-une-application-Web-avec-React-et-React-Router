import Gallery from '../components/Gallery';
import MyCollapse from '../components/MyCollapse';
import { useParams } from 'react-router-dom';
import { data } from '../data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar} from '@fortawesome/free-solid-svg-icons'

function Logement() {

  const { id: logementId } = useParams();
  const logement = data.find(item => item.id === logementId);

  if (!logement) {
    return <div>Logement non trouvé</div>;
  }
  const { title, location, tags, host, rating } = logement;
    return (
      <div className='container-logement'>
          <Gallery picturesLinks={logement.pictures}/>
          <div className='information'>
            <div className='information-logement'>
              <h2 className='title-location'>{title}</h2>
              <p className='localisation'>{location}</p>
              <div className='tags'>
                {tags.map((tag, index) => (
                  <p key={index} className='tag'>{tag}</p>
                ))}
              </div>
            </div>
            <div className='information-hote'>
              <div className='hote'>
                <div className='hote-name'>
                  <p className='prenom'>{host.name.split(' ')[0]}</p>
                  <p className='nom'>{host.name.split(' ')[1]}</p>
                </div>
                <div className='wrapper-image-hote'>
                  <img className='img-hote' src={host.picture} alt={host.name}/>
                </div>
              </div>
              <div className='stars'>
                {[...Array(5)].map((_, index) => (
                  <FontAwesomeIcon icon={faStar} key={index} className={index < rating ? 'star' : 'star-inactive'}/>
                ))}
              </div>
            </div>
          </div>
          <div className='description'>
            <MyCollapse title="Description" content={logement.description} id="descriptionCollapse"/>
            <MyCollapse 
              title="Équipements" 
              content={
                <ul>
                  {logement.equipments.map((equipment, index) => (
                    <li key={index}>{equipment}</li>
                  ))}
                </ul>
              } 
              id="equipmentsCollapse" 
            />          
          </div>
      </div>
    );
  }
  
  export default Logement;
  