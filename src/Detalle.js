import {FormattedMessage} from "react-intl";

const Detalle = ({selectedPelicula}) => {

    return(
        <div className="col-md-5">
            <div className="card h-100">
                <img src={selectedPelicula.poster} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">{selectedPelicula.name}</h5>
                    <p className="card-text">{selectedPelicula.description}</p>
                    <strong><FormattedMessage id="detail-cast"/>: {selectedPelicula.cast}</strong>
                </div>
            </div>
        </div>
    )
}
export default Detalle
