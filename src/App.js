import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";
import Houses from "./Houses";
import Rooms from "./Rooms";

function App({}) {
    const [houses, setHouses] = useState([])
    const [selectedHouse, setSelectedHouse] = useState(null)

    const [rooms, setRooms] = useState([])

    const fetchInfo = async () => {
        const housesURL = "https://gist.githubusercontent.com/josejbocanegra/0067d2b28b009140fee423cfc84e40e6/raw/6e6b11160fbcacb56621b6422684d615dc3a0d33/spaces.json"
        const roomsURL = "https://gist.githubusercontent.com/josejbocanegra/92c90d5f2171739bd4a76d639f1271ea/raw/9effd124c825f7c2a7087d4a50fa4a91c5d34558/rooms.json"
        const housesRaw = (await axios.get(housesURL)).data
        const roomsRaw = (await axios.get(roomsURL)).data
        setHouses(housesRaw)
        setRooms(roomsRaw)
    }

    useEffect(() => {
        fetchInfo().catch((e => console.error(e))
        )
    }, [houses.length, rooms.length])

    return (
        <div className="d-flex flex-column w-100">
            <Houses houses={houses} setSelectedHouse={setSelectedHouse}/>
            {selectedHouse && <Rooms roomsRaw={rooms} selectedHouse={selectedHouse}/>}
        </div>
    );
}

export default App;

