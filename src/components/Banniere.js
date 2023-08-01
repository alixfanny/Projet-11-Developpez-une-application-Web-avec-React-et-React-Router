function Banniere({imgSrc, imgAlt, pageType}) {
    let className = 'containt-img';

    if (pageType === 'home') {
        className += ' home';
    } else if (pageType === 'apropos') {
        className += ' apropos';
    }

    return (
        <div className={className}>
            <div className='filter-img'></div>
            <img className='image' src={imgSrc} alt={imgAlt} />
        </div>

    )
}

export default Banniere