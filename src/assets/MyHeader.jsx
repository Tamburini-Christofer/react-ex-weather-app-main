import { useState } from "react";

import Button from "../assets/components/Button";

function MyHeader() {
  const [activeButton, setActiveButton] = useState(false);

  function toggleMenu() {
    setActiveButton((prev) => !prev);
  }

  return (
    <>
      <header>
        <div className="containerHeader">
          <img src="../../public/img/logo.svg" alt="Logo applicazione" />
          <Button
          isActive={activeButton}
          onClick={toggleMenu}
          customClass="btnUnits tue"/>
          {activeButton && (
            <ul className="headerdropdownMenu">
              <h5>Switch to Imperial</h5>
              <span>Temperature</span>
              <li>Celsius (°C)</li>
              <li>Fahrenheit (°F)</li>
              <hr />
              <>Wind Speed</>
              <li>km/h</li>
              <li>mph</li>
              <hr />
              <span>Precipitation</span>
              <li>Miilimeters (mm)</li>
              <li>Inches(in)</li>
            </ul>
          )}
        </div>
      </header>
    </>
  );
}

export default MyHeader;
