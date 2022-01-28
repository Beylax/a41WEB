import {useEffect, useRef} from 'react';

function Negozio() {

const storeDiv = useRef(null);
const scriptRef = useRef(null);

window.localStorage.setItem("show_ecwid_logs","true")
window.ecwid_script_defer = true;
window.ecwid_dynamic_widgets = true;
window.ec = window.ec || Object();
window.ec.storefront = window.ec.storefront || Object();
window.ec.enable_catalog_on_one_page = true;
window._xnext_initialization_scripts = [{
  widgetType: 'ProductBrowser',
  id: 'my-store-71128923',
  arg: ["id=productBrowser", "views=grid(20,3)"]  },
  {
    widgetType: 'CategoriesV2',
    id: 'my-categories-71128923',
    arg: ["id=categoriesV2"]
  }
  ,
  {
    widgetType: 'SearchWidget',
    id: 'my-search-71128923',
    arg: ["id=searchWidget"]
  }
];



let script = document.createElement('script');
script.type = 'text/javascript';
script.src = ('https://app.ecwid.com/script.js?71128923&data_platform=code&data_date=2022-01-28');
script.defer = true;
script.ref=scriptRef;

useEffect(() => {
if(!scriptRef.current){
  storeDiv.current.appendChild(script);
   }
});

return (
  <div className="store">
        <div id="my-search-71128923"></div>
        <div id="my-categories-71128923"></div>
        <div id="my-store-71128923" ref={storeDiv}></div>
        <div className="ec-cart-widget"></div>
  </div>

  );
}

export default Negozio;