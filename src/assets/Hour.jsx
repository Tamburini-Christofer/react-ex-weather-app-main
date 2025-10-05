import { useState } from "react";

import Button from "./components/Button";
import CardHour from "./components/CardHour";

const nuvoloso = "/img/icon-overcast.webp";
const soleggiato = "/img/icon-partly-cloudy.webp";
const sole = "/img/icon-sunny.webp";
const neve = "/img/icon-snow.webp";
const nebbia = "/img/icon-fog.webp";

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
            content="Day"
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
        <CardHour img={nuvoloso} alt="Nuvoloso" hour="3PM" degrees="68°" />
        <CardHour img={soleggiato} alt="Soleggiato" hour="4PM" degrees="68°" />
        <CardHour img={sole} alt="Sole" hour="5PM" degrees="68°" />
        <CardHour img={nuvoloso} alt="Nuvoloso" hour="6PM" degrees="66°" />
        <CardHour img={neve} alt="Neve" hour="7PM" degrees="66°" />
        <CardHour img={nebbia} alt="Nebbia" hour="8PM" degrees="64°" />
        <CardHour img={neve} alt="Neve" hour="9PM" degrees="63°" />
        <CardHour img={nuvoloso} alt="Nuvoloso" hour="10PM" degrees="63°" />
        </ul>
      </div>
    </>
  );
}

export default Hour;
