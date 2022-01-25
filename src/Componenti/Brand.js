import React from "react";
import Indipendent from "../Immagini/indipendent.png"
import Obey from "../Immagini/obey.png"
import Santacruz from "../Immagini/santacruz.png"
import Funky from "../Immagini/funky.png"
import Propaganda from "../Immagini/propaganda.png"
import Tonyhawk from "../Immagini/tonyhawk.png"
import S from "../Immagini/s.png"
import Liquidforce from "../Immagini/liquidforce.png"
import Dollynoire from "../Immagini/dollynoire.png"
import Nitro from "../Immagini/nitro.png"
import Jones from "../Immagini/jones.png"
import Flip from "../Immagini/flip.png"

class Brand extends React.Component {
    constructor(props) {
        super(props)
        this.state = {  }
    }
    render() { 
        return ( 
            <div id="Brand" className="Brand container-fluid">
                <div className="d-inline align-center">
                    <h1 className="">
                        ALCUNI DEI NOSTRI BRAND
                    </h1>
                    <div className="row">
                        <div class="card col-2">
                            <img src={Indipendent} class="card-img" alt="..."/>
                        </div>
                        <div class="card col-2">
                            <img src={Obey} class="card-img" alt="..."/>
                        </div>
                        <div class="card col-2">
                            <img src={Santacruz} class="card-img" alt="..."/>
                        </div>
                        <div class="card col-2">
                            <img src={Funky} class="card-img" alt="..."/>
                        </div>
                        <div class="card col-2">
                            <img src={Propaganda} class="card-img" alt="..."/>
                        </div>
                        <div class="card col-2">
                            <img src={Tonyhawk} class="card-img" alt="..."/>
                        </div>
                    </div>
                    <div className="row">
                        <div class="card col-2">
                            <img src={Flip} class="card-img" alt="..."/>
                        </div>
                        <div class="card col-2">
                            <img src={Jones} class="card-img" alt="..."/>
                        </div>
                        <div class="card col-2">
                            <img src={Nitro} class="card-img" alt="..."/>
                        </div>
                        <div class="card col-2">
                            <img src={Dollynoire} class="card-img" alt="..."/>
                        </div>
                        <div class="card col-2">
                            <img src={Liquidforce} class="card-img" alt="..."/>
                        </div>
                        <div class="card col-2">
                            <img src={S} class="card-img" alt="..."/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
 
export default Brand