import {FormattedMessage} from "react-intl";
import {useState} from "react";

const Rooms = ({roomsRaw, selectedHouse}) => {
    const [selectedRoom, setSelectedRoom] = useState(null)


    const rooms = roomsRaw.filter((room) => room.homeId === selectedHouse.id)
    console.log(rooms)
    if (selectedRoom && selectedRoom.homeId !== selectedHouse.id) {
        setSelectedRoom(null)
    }

    const printValue = (desired) => {
        return desired.unit === "boolean" ? desired.value : `${desired.value} ${desired.unit}`;
    }

    return (
        <div className="rooms m-4">
            <div className="row">
                <div className="col-sm-6">
                    <h1><FormattedMessage id="rooms-title"/></h1>
                    <div className="card-group">
                        {rooms &&
                            rooms.map(room =>
                                <div style={{cursor: "pointer"}} onClick={() => setSelectedRoom(room)} className="card">
                                    <div className="card-body">
                                        <h5 className="class-title">{room.name}</h5>
                                        <img
                                            src="/roomIcon.png"
                                            style={{objectFit: "scale-down", maxHeight: "100px"}}
                                            className="card-img-top"
                                            alt="Decoration image for room"/>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
                <div className="col-sm-6">
                    {selectedRoom && <table className="table table-striped">
                        <thead>
                        <th>#</th>
                        <th>ID</th>
                        <th><FormattedMessage id="dev-table-device"/></th>
                        <th><FormattedMessage id="dev-table-value"/></th>
                        </thead>
                        <tbody>
                        {selectedRoom.devices.map((device, index) =>
                            <tr key={device.name}>
                                <td>{index + 1}</td>
                                <td>{device.id}</td>
                                <td>{device.name}</td>
                                <td>{printValue(device.desired)}</td>
                            </tr>
                        )}
                        </tbody>
                    </table>}
                </div>
            </div>
        </div>
    )
}
export default Rooms
