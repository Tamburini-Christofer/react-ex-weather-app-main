import { useState } from "react";

import Button from "./Button";

function Hour() {
  const [activeButton, setActiveButton] = useState(false);

  function toggleMenu() {
    setActiveButton((prev) => !prev);
  }

  return (
    <>
      <div className="containerHour">
        <div className="headerHour">
          <span>Hourly forecast</span>
          <Button
            isActive={activeButton}
            onClick={toggleMenu}
            customClass="btnUnits tue"
          />
            {activeButton && (
            <ul className="dropdownMenu">
              <li>Monday</li>
              <li>Tuesday</li>
              <li>Wednesday</li>
              <li>Thrusday</li>
              <li>Friday</li>
              <li>Saturday</li>
              <li>Sunday</li>
            </ul>
            )}
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
