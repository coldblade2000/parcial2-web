import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {FormattedMessage, IntlProvider, useIntl} from "react-intl";
import axios from "axios";
import Lista from "./Lista";
import Detalle from "./Detalle";
import localeEnMessages from "./i18n/en.json"
import localeEsMessages from "./i18n/es.json"
import Houses from "./Houses";
import Rooms from "./Rooms";

function App({locale}) {
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
        /*const peliculasURL = (intl.locale.startsWith("en")) ?
            "https://gist.githubusercontent.com/josejbocanegra/8b436480129d2cb8d81196050d485c56/raw/48cc65480675bf8b144d89ecb8bcd663b05e1db0/data-en.json" :
            "https://gist.githubusercontent.com/josejbocanegra/f784b189117d214578ac2358eb0a01d7/raw/2b22960c3f203bdf4fac44cc7e3849689218b8c0/data-es.json"
*/
        fetchInfo().catch((e => console.error(e))
        )
    }, [houses.length, rooms.length])

    return (
        <div className="d-flex flex-column w-100">
            {/* <header className="w-100 p-2">
                <h1><i className="bi bi-camera-reels-fill"></i><FormattedMessage id="bar-title"/></h1>
            </header>*/}
            <Houses houses={houses} setSelectedHouse={setSelectedHouse}/>
            {selectedHouse && <Rooms roomsRaw={rooms} selectedHouse={selectedHouse}/>}
        </div>
    );
}

export default App;

