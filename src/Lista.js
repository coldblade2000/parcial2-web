import {FormattedMessage} from "react-intl";
import Grafica from "./Grafica";

const Lista = ({peliculas, setSelectedPelicula}) => {
    return (
        <div className={"col-md-7"}>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th><FormattedMessage id="head-name"/></th>
                        <th><FormattedMessage id="head-directedby"/></th>
                        <th><FormattedMessage id="head-country"/></th>
                        <th><FormattedMessage id="head-budget"/></th>
                        <th><FormattedMessage id="head-release"/></th>
                        <th><FormattedMessage id="head-views"/></th>
                    </tr>
                </thead>
                <tbody>
                {peliculas.map((pelicula)=>
                    <tr key={pelicula.id} style={{cursor:"pointer"}} onClick={()=> setSelectedPelicula(pelicula)}>
                        <td>{pelicula.id}</td>
                        <td>{pelicula.name}</td>
                        <td>{pelicula.directedBy}</td>
                        <td>{pelicula.country}</td>
                        <td>{pelicula.budget}</td>
                        <td>{pelicula.releaseDate}</td>
                        <td>{pelicula.views}</td>
                    </tr>
                )}
                </tbody>
            </table>
            <Grafica peliculas={peliculas}/>
        </div>
    )
}
export default Lista
