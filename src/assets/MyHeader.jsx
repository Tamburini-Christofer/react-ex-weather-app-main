import { useState } from "react";

import Button from "./components/Button";
import MenuOption from "./components/MenuOption";

function MyHeader() {
  const [activeButton, setActiveButton] = useState(false);

  function toggleMenu() {
    setActiveButton((prev) => !prev);
  }

  return (
    <>
      <header>
        <div className="containerHeader">
          <img src="../../public/img/logo.svg" alt="Logo applicazione" id="logo"/>
          <Button
          isActive={activeButton}
          onClick={toggleMenu}
          customClass="btnUnits tue"
          content="Units"/>
          {activeButton && (
            <MenuOption />
          )}
        </div>
      </header>
    </>
  );
}

export default MyHeader;
