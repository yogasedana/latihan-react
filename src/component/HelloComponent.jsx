
// import react untuk react bisa membaca atau merender sebagai dokument import React from "react";
import React from "react";
import './HelloComponent.css';


// stateless component atau functional compenen
const HelloComponent = () => {
    return <p className="text-p">testing memanggil function HelloComponent</p>
}

// ini digunakan untuk pemanggilan component dimana saja export default NamaComponent
export default HelloComponent;