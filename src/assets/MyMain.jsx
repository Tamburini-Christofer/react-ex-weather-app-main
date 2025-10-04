import Today from "./components/Today"
import Info from "./components/Info"
import Week from "./components/Week"

function MyMain () {
    return(
        <>
    <div className="containerMain">
        <div className="item1">
            <Today />
        </div>
        <div className="item2">

        </div>
        <div className="item3">
            <Info />
        </div>
        <div className="item4">
            <Week />
        </div>
    </div>
        </>
    )
}

export default MyMain;