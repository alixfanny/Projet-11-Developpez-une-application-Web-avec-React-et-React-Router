function Cards({imgSrc, imgAlt, nameLocation}) {
    return(
        <div>
            <div className="content-img-cards">
                <img src={imgSrc} alt={imgAlt} />
            </div>
            <p>{nameLocation}</p>
        </div>
    )
}

export default Cards