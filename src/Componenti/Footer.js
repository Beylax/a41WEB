import React from "react";
import Whatsapp from "../Immagini/whatsappLogo.png"
import Facebook from "../Immagini/facebookLogo.png"
import Youtube from "../Immagini/youtubeLogo.png"
import Instagram from "../Immagini/instagramLogo.png"

class Footer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {  }
    }
    render() { 
        return ( 
            <div id="footer" className="Footer">
                <footer class="bg-dark text-center text-white">
                <div class="p-4 pb-0">
                        <section class="mb-4">
                            <a href='https://www.facebook.com/Area41BoardShop' target='_blank' rel="noreferrer"><img src={Facebook} alt="immagine"/></a>
                            <a href='https://www.youtube.com/channel/UCO9gA4RKYskMgBAjUfgqT5Q' target='_blank' rel="noreferrer"><img src={Youtube} alt="immagine"/></a>
                            <a href='https://www.instagram.com/a41street_boardshop/' target='_blank' rel="noreferrer"><img src={Instagram} alt="immagine"/></a>
                            <a href='https://web.whatsapp.com/send?phone=+393288870650' target='_blank' rel="noreferrer"><img src={Whatsapp} alt="immagine"/></a>
                        </section>
                    </div>
                    <div class="text-center p-3 pt-0">
                        © 2022 Copyright AREA41 by Manuel Baldoni
                    </div>
                </footer>
            </div>
        )
    }
}
 
export default Footer