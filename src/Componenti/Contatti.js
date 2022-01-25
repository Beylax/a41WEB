import React from "react";

class Contatti extends React.Component {
    constructor(props) {
        super(props)
        this.state = {  }
    }
    render() { 
        return ( 
            <div id="contatti" className="Contatti container-fluid w-100">
                <div className="container-fluid text-start w-50">
                    <form>
                        <div class="form-outline mb-4">
                            <label class="form-label" for="form5Example1">Name</label>
                            <input type="text" id="form5Example1" class="form-control" placeholder="Veronica"/>
                        </div>

                        <div class="form-outline mb-4">
                            <label class="form-label" for="form5Example2">Indirizzo mail</label>
                            <input type="email" id="form5Example2" class="form-control" placeholder="nome@gmail.com"/>
                        </div>

                        <div class="form-outline mb-4">
                            <label class="form-label" for="typePhone">Numero di telefono</label>
                            <input type="tel" id="typePhone" class="form-control" placeholder="333 444 5556"/>
                        </div>

                        <div class="form-outline">
                            <label class="form-label" for="textAreaExample">Note</label>
                            <textarea class="form-control" id="textAreaExample" rows="4"></textarea>
                        </div>

                        <div class="form-check d-flex justify-content-center mb-4">
                            <input class="form-check-input me-2" type="checkbox" value="" id="form5Example3" required/>
                            <label class="form-check-label" for="form5Example3">
                                Ho preso visione e accetto l'informativa sulla <a href="/Privacy">privacy</a>.
                            </label>
                        </div>

                        <button type="submit" class="btn btn-outline-success btn-block mb-4 col-12">Invia</button>
                    </form>
                </div>
            </div>
        )
    }
}
 
export default Contatti