import React from "react";
import Afterskull from "../Immagini/afterskull.jpg"
import Crazyriders from "../Immagini/crazyriders.jpg"
import Funghetto from "../Immagini/funghetto.jpg"
import SkateCesena from "../Immagini/skateCesena.jpg"
import Tavernaverde from "../Immagini/tavernaverde.png"
import Wakepark from "../Immagini/wakepark.jpg"

class Amici extends React.Component {
    constructor(props) {
        super(props)
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="Amici container-fluid">
                {
                    /*
                        <div className="Amici container-fluid d-inline-block">
                <div className="row">
                    <div className="col-8">
                        <div class="card">
                            <a href="https://www.facebook.com/afterskulltrail" target="_blank" rel="noreferrer">
                                <img src={Afterskull} class="card-img" alt="..."/>
                            </a>
                        </div>
                        <div class="card">
                            <a href="https://www.facebook.com/skateschoolcesena" target="_blank" rel="noreferrer">
                                <img src={SkateCesena} class="card-img" alt="..."/>
                            </a>
                        </div>
                        <div class="card">
                            <a href="https://www.facebook.com/funghettopark" target="_blank" rel="noreferrer">
                                <img src={Funghetto} class="card-img" alt="..."/>
                            </a>
                        </div>
                    </div>
                    <div class="card col-4">
                        <a href="https://www.facebook.com/crazyridersitalia" target="_blank" rel="noreferrer">
                            <img src={Crazyriders} class="card-img" alt="..."/>
                        </a>
                    </div>
                </div>
                <div className="row">
                    <div class="card col-6">
                        <a href="https://www.facebook.com/scisnowtavernaverde/" target="_blank" rel="noreferrer">
                            <img src={Tavernaverde} class="card-img" alt="..."/>
                        </a>
                    </div>
                    <div class="card col-6">
                        <a href="https://www.facebook.com/wakeparkmima" target="_blank" rel="noreferrer">
                        <img src={Wakepark} class="card-img" alt="..."/>
                        </a>
                    </div>
                </div>
            </div>

                    */
                }
                <div id="carouselExampleIndicators" class="carousel slide carousel-dark" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={Afterskull} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src={SkateCesena} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src={Funghetto} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src={Crazyriders} class="crazy d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src={Tavernaverde} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src={Wakepark} class="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
                </div>
            </div>
        )
    }
}
 
export default Amici