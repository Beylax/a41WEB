import React from "react";
import WhatsappLogo from "../Immagini/whatsapp.svg";

class Orari extends React.Component {
    constructor(props) {
        super(props)
        this.state = {  }
    }
    render() { 
        return ( 
            <div id="orari" className="Orari container-fluid">
                <div className="container-fluid">
                    <div className="align-center">
                        <h1>ORARI DEL NEGOZIO</h1>
                        <p>
                            Aperto tutti i giorni dalle 9:30 ale 12:30 e dalle 15:30 alle 19:30
                        </p>
                        <p>
                            Domenica chiuso
                        </p>
                        <p>
                            Clicca sul logo Whatsapp qui sotto e mettiti subito in contatto con noi!
                        </p>
                    </div>
                    <a href='https://web.whatsapp.com/send?phone=+393288870650' target='_blank' rel="noreferrer"><img className="wal" src={WhatsappLogo} alt="immagine"/></a>
                </div>
            </div>
        )
    }
}
 
export default Orari