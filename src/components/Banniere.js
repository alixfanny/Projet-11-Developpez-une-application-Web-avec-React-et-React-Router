import '../style.css';
import '../reset.css';

function Banniere({imgSrc, imgAlt}) {
    return (
        <div className='containt-img'>
            <div className='filter-img'></div>
            <img className='image' src={imgSrc} alt={imgAlt} />
        </div>

    )
}

export default Banniere