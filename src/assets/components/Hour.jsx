function Hour() {
  return (
    <>
      <div className="containerHour">
        <div className="headerHour">
          <span>Hourly forecast</span>
          <button className="btnUnits tue">
            Tuesday <i class="fa-solid fa-caret-down"></i>
          </button>
        </div>
        <ul>
          <li>
            <div>
              <img src="../../../public/img/icon-overcast.webp" alt="" />
              <span>3 PM</span>
            </div>
            <div>
              <span className="gradi">68°</span>
            </div>
          </li>
          <li>
            <div>
              <img src="../../../public/img/icon-partly-cloudy.webp" alt="" />
              <span>4 PM</span>
            </div>

            <div>
              <span className="gradi">68°</span>
            </div>
          </li>
          <li>
            <div>
              <img src="../../../public/img/icon-sunny.webp" alt="" />
              <span>5 PM</span>
            </div>
            <div>
              <span className="gradi">68°</span>
            </div>
          </li>
          <li>
            <div>
              <img src="../../../public/img/icon-overcast.webp" alt="" />
              <span>6 PM</span>
            </div>
            <div>
              <span className="gradi">66°</span>
            </div>
          </li>
          <li>
            <div>
              <img src="../../../public/img/icon-snow.webp" alt="" />
              <span>7 PM</span>
            </div>
            <div>
              <span className="gradi">66°</span>
            </div>
          </li>
          <li>
            <div>
              <img src="../../../public/img/icon-fog.webp" alt="" />
              <span>8 PM</span>
            </div>
            <div>
              <span className="gradi">64°</span>
            </div>
          </li>
          <li>
            <div>
              <img src="../../../public/img/icon-snow.webp" alt="" />
              <span>9 PM</span>
            </div>
            <div>
              <span className="gradi">63°</span>
            </div>
          </li>
          <li>
            <div>
              <img src="../../../public/img/icon-overcast.webp" alt="" />
              <span>10 PM</span>
            </div>
            <div>
              <span className="gradi">63°</span>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Hour;
