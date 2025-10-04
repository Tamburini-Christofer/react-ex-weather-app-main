function Week() {
  return (
    <>
      <div>
        <h4>Daily forecast</h4>
        <div className="containerWeek">
          <div>
            <h5>Tue</h5>
            <img
              src="../../../public/img/icon-rain.webp"
              alt="Immagini della pioggia"
            />
            <div>
              <span>68°</span>
              <span>57°</span>
            </div>
          </div>
          <div>
            <h5>Wed</h5>
            <img
              src="../../../public/img/icon-drizzle.webp"
              alt="Immagini della pioggia"
            />
            <div>
              <span>70°</span>
              <span>59°</span>
            </div>
          </div>
          <div>
            <h5>Thu</h5>
            <img
              src="../../../public/img/icon-sunny.webp"
              alt="Immagini della pioggia"
            />
            <div>
              <span>75°</span>
              <span>57°</span>
            </div>
          </div>
          <div>
            <h5>Fri</h5>
            <img
              src="../../../public/img/icon-partly-cloudy.webp"
              alt="Immagini della pioggia"
            />
            <div>
              <span>77°</span>
              <span>55°</span>
            </div>
          </div>
          <div>
            <h5>Sat</h5>
            <img
              src="../../../public/img/icon-storm.webp"
              alt="Immagini della pioggia"
            />
            <div>
              <span>70°</span>
              <span>59°</span>
            </div>
          </div>
          <div>
            <h5>Sun</h5>
            <img
              src="../../../public/img/icon-snow.webp"
              alt="Immagini della pioggia"
            />
            <div>
              <span>77°</span>
              <span>61°</span>
            </div>
          </div>
          <div>
            <h5>Mon</h5>
            <img
              src="../../../public/img/icon-fog.webp"
              alt="Immagini della pioggia"
            />
            <div>
              <span>75°</span>
              <span>59°</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Week;
