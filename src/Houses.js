import {FormattedMessage} from "react-intl";


const Houses = ({houses, setSelectedHouse}) => {

    return (
        <div className="houses m-4">
            <h1><FormattedMessage id="houses-title"/></h1>
            <div className="card-group">
                {houses &&
                    houses.map(house =>
                        <div style={{cursor: "pointer"}} onClick={() => setSelectedHouse(house)} className="card">
                            <div className="card-body">
                                <img
                                    src="/houseIcon.png"
                                    style={{objectFit: "scale-down", maxHeight: "100px"}} className="card-img-top"
                                    alt="Decoration image for house"/>
                                <h5 className="class-title">{house.name}</h5>
                                <p className="card-subtitle">{house.address}</p>
                            </div>
                        </div>
                    )
                }</div>
        </div>
    )
}
export default Houses
