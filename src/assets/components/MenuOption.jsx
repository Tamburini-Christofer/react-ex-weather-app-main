const MenuOption = () => {
    return(
        <>
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
        </>
    )
}

export default MenuOption;