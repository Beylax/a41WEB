import React from "react";

class Chisiamo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="Chisiamo container-fluid">
                <div className="container-fluid">
                    <div>
                        <h1>GASIAMO INSIEME DAL 2009</h1>
                        <p>
                            Dal 2009 siamo a fianco degli amanti di tutti i Boarder Sport !
                            Da semplici appassionati e praticanti abbiamo trasformato le nostre passioni  
                            e siamo diventati 
                            AREA 41 Street & Boardshop!
                            Ma quello che ci piace di più é continuare a gasare per le strade, le montagne e i laghi di tutta Italia
                            Snowboard, Wakeboard, Skate, Monopattini Stunt, da noi trovi tutto quello che ti serve!
                            Per trascorrere le tue giornate sulla tua tavola!
                            Il Nostro Shop dispone di un laboratorio attrezzato per le riparazioni e preparazioni di tutte le tavole Snowboard Wake o Skate  Sciolla e Noleggio
                            E se ti serve nuova attrezzatura da Snowboard o Wakeboard ritiriamo la tua vecchia tavola e la scontiamo sull' acquisto di una nuova.
                            E in più dai da noi trovi lo Streetware più stiloso del momento!
                            Clicca qui sotto e fai un giro nel nostro shop!
                        </p>
                    </div>
                    <iframe title="Video" className="video-thomas w-100" height="315"
                        src="https://www.youtube.com/embed/buktnYJBTtg?autoplay=1&mute=1">
                    </iframe>
                    <hr/>
                </div>
            </div>
        )
    }
}
 
export default Chisiamo