import React from "react";
import StreetwareFoto from "../Immagini/streetwear.png";

class Streetware extends React.Component {
    constructor(props) {
        super(props)
        this.state = {  }
    }
    render() { 
        return ( 
            <div id="Chisiamo" className="Streetware">
                <div className="container-fluid justify-content-center">
                    <div class="card">
                        <img src={StreetwareFoto} class="card-img" alt="..."/>
                        <div className="card-img-overlay">
                            <div class="card-body">
                                <div className="card-text">
                                    <h3>ABBIGLIAMENTO & STREETWEAR</h3>
                                    <h5>PER CHI VUOLE VESTIRE IN BELLURA</h5>
                                    <div className="btn btn-outline-success">GUARDA IL NOSTRO STREETWARE</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
 
export default Streetware