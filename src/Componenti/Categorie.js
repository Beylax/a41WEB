import React from "react";
import Snowboard from "../Immagini/snowboard.jpg"
import Wakeboard from "../Immagini/wakeboard.jpg"
import Skateboard from "../Immagini/skateboard.jpg"
import Monopattini from "../Immagini/monopattini.jpg"

class Categorie extends React.Component {
    constructor(props) {
        super(props)
        this.state = {  }
    }
    render() { 
        return ( 
            <div id="home" className="Categorie container-fluid d-inline d-md-flex">
                <div class="card">
                    <img src={Snowboard} class="card-img" alt="..."/>
                    <div className="card-img-overlay">
                        <div class="card-body">
                            <h5 class="card-text">SNOWBOARD</h5>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <img src={Wakeboard} class="card-img" alt="..."/>
                    <div className="card-img-overlay">
                        <div class="card-body">
                            <h5 class="card-text">WAKEBOARD</h5>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <img src={Skateboard} class="card-img" alt="..."/>
                    <div className="card-img-overlay">
                        <div class="card-body">
                            <h5 class="card-text">SKATEBOARD</h5>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <img src={Monopattini} class="card-img" alt="..."/>
                    <div className="card-img-overlay">
                        <div class="card-body">
                            <h5 class="card-text">MONOPATTINI</h5>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
 
export default Categorie