import React from "react";
import Amici from "../Componenti/Amici";
import Brand from "../Componenti/Brand";
import Categorie from "../Componenti/Categorie";
import Chisiamo from "../Componenti/ChiSiamo";
import Coupon from "../Componenti/Coupon";
import Streetware from "../Componenti/Streetware";
import Orari from "../Componenti/Orari";
import Contatti from "../Componenti/Contatti";
import DoveSiamo from "../Componenti/DoveSiamo";
import Footer from "../Componenti/Footer";

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="Home">
                <div className="container-fluid">
                    <Categorie/>
                    <hr/>
                    <Streetware/>
                    <hr/>
                    <Chisiamo/>
                    <Coupon/>
                    <hr/>
                    <Amici/>
                    <hr/>
                    <Brand/>
                    <hr/>
                    <Orari/>
                    <hr/>
                    <Contatti/>
                    <hr/>
                    <DoveSiamo/>
                    <hr/>
                    <Footer/>
                </div>
            </div>
        )
    }
}
 
export default Home