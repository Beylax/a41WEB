import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

class DoveSiamo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {  }
    }

    render() { 
        return ( 
            <div id="dovesiamo" className="DoveSiamo container-fluid">
                <div className="container-fluid row">
                    <div className="col-12 col-md-6">
                        <h1>Dove siamo</h1>
                        <p>
                            Ti aspettiamo in
                        </p>
                        <p>
                            Via Sobborgo Eugenio Valzania 35
                        </p>
                        <p>
                            Cesena 47521 (FC)
                        </p>
                        <br></br>
                        <p>
                            Per maggiori info, <b>CHIAMACI:</b>
                        </p>
                        <p>
                            +39 054727905
                        </p>
                        <p>
                            +39 3288870650
                        </p>
                        <p>
                            +39 3479909900
                        </p>
                        <br></br>
                        <p>
                            Oppure scrivici una mail a: <b>info@a41.it</b>
                        </p>
                        <p>
                            P.I.  03779480403
                        </p>
                    </div>
                    <div className="col-12 col-md-6">
                        <MapContainer center={[44.13778, 12.25406]} zoom={20} >
                            <TileLayer
                                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    />

                            <Marker position={[44.13778, 12.25406]}>
                                <Popup>
                                    AREA41
                                </Popup>
                            </Marker>

                        </MapContainer>
                    </div>
                </div>
            </div>
        )
    }
}
 
export default DoveSiamo