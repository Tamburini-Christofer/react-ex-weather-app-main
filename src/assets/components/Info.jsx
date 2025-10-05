import CardInfo from "./CardInfo"

function Info() {
  return (
    <>
        <div className="containerInfo">
            <CardInfo 
            content="Feels Like"
            degrees="64°"
            percentage="46%"
            speed="9 mph"
            measure="0 in"/>
        </div>    
    </>
  );
}

export default Info;
