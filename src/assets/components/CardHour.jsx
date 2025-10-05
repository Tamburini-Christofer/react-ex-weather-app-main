function CardHour ({ img, hour, degrees,alt}) {
    return(
        <li>
            <div>
              <img src={img} alt={alt}/>
              <span>{hour}</span>
            </div>

            <div>
              <span className="gradi">{degrees}</span>
            </div>
          </li>
    )
}

export default CardHour;