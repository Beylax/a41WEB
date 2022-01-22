import React from "react";

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="Home">
                <div className="container mt-3">
                    <div className="section_our_solution">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="our_solution_category">
                                    <div className="solution_cards_box">
                                        <div className="solution_card">
                                            <div className="hover_color_bubble"></div>
                                            <div className="solu_title mt-5">
                                                <h3>OTTIENI UN COUPON!</h3>
                                            </div>
                                            <div className="solu_description mt-5">
                                                <p>
                                                    CLICCA SUL PULSANTE QUI SOTTO E STAMPA IL TUO BUONO SCONTO! PRESENTALO IN SHOP A CESENA E OTTIENI UNO SCONTO DI 10 EURO SU UNA SPESA MINIMA DI 50
                                                </p>
                                                <button type="button" className="read_more_btn">Stampa coupon</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr/>
                </div>
            </div>
        )
    }
}
 
export default Home