function Info({ degrees, percentage,speed,measure}) {
  return (
    <>
            <div>
                <h4>Feels Like</h4>
                <span>{degrees}</span>
            </div>
            <div>
                <h4>Humidity</h4>
                <span>{percentage}</span>
            </div>
            <div>
                <h4>Wind</h4>
                <span>{speed}</span>
            </div>
            <div>
                <h4>Precipitation</h4>
                <span>{measure}</span>
            </div>
    </>
  );
}

export default Info;