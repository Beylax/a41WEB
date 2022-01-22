import React from "react";

class ErrorPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="ErrorPage">
                <div className="container mt-3">
                <h1>Pagina non trovata</h1>
                <hr/>
                </div>
            </div>
        )
    }
}
 
export default ErrorPage