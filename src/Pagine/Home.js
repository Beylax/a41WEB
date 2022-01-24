import React from "react";
import Amici from "../Componenti/Amici";
import Categorie from "../Componenti/Categorie";
import Chisiamo from "../Componenti/ChiSiamo";
import Coupon from "../Componenti/Coupon";
import Streetware from "../Componenti/Streetware";

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
                </div>
            </div>
        )
    }
}
 
export default Home