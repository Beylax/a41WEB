import React from "react";

class Negozio extends React.Component {
    constructor(props) {
        super(props)
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="Negozio">
                <div className="container mt-3">
                <div id="my-store-71128923"></div>
                    <div>
                        <script data-cfasync="false" type="text/javascript" src="https://app.ecwid.com/script.js?71128923&data_platform=code&data_date=2022-01-28" charset="utf-8"></script><script type="text/javascript"> xProductBrowser("categoriesPerRow=3","views=grid(20,3) list(60) table(60)","categoryView=grid","searchView=list","id=my-store-71128923");</script>
                    </div>
                </div>
                <div id="my-search-71128923"></div>
                <div>
                    <script data-cfasync="false" type="text/javascript" src="https://app.ecwid.com/script.js?71128923&data_platform=code&data_date=2022-01-28" charset="utf-8"></script>
                    <script type="text/javascript"> xSearch("id=my-search-71128923"); </script>
                </div>
                <div class="ec-cart-widget"></div>
                <div>
                    <script data-cfasync="false" type="text/javascript" src="https://app.ecwid.com/script.js?71128923&data_platform=code&data_date=2022-01-28" charset="utf-8"></script>
                    <script type="text/javascript">Ecwid.init();</script>
                </div>
            </div>
        )
    }
}
 
export default Negozio