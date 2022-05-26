import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {FormattedMessage, IntlProvider, useIntl} from "react-intl";
import axios from "axios";
import Lista from "./Lista";
import Detalle from "./Detalle";
import localeEnMessages from "./i18n/en.json"
import localeEsMessages from "./i18n/es.json"

function App({locale}) {
    const [peliculas, setPeliculas] = useState([])
    const [selectedPelicula, setSelectedPelicula] = useState(null)
    const intl = useIntl()


    useEffect(() => {
        const peliculasURL = (intl.locale.startsWith("en")) ?
            "https://gist.githubusercontent.com/josejbocanegra/8b436480129d2cb8d81196050d485c56/raw/48cc65480675bf8b144d89ecb8bcd663b05e1db0/data-en.json" :
            "https://gist.githubusercontent.com/josejbocanegra/f784b189117d214578ac2358eb0a01d7/raw/2b22960c3f203bdf4fac44cc7e3849689218b8c0/data-es.json"

        axios.get(peliculasURL)
            .then((m) => setPeliculas(m.data))
            .catch((e) => console.error(e))
    }, [])

    return (
        <>
            <header className="w-100 p-2">
                <h1><i className="bi bi-camera-reels-fill"></i><FormattedMessage id="bar-title"/></h1>
            </header>
            <div className="row w-100 justify-content-center">
                <Lista peliculas={peliculas} setSelectedPelicula={setSelectedPelicula}/>
                {selectedPelicula &&
                    <Detalle selectedPelicula={selectedPelicula} />}
            </div>
        </>
    );
}

export default App;

