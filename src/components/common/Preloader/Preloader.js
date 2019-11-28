import React from 'react';
import preloader from '../../../assets/images/loader.gif';


let Preloader = (props) => {
    return <div style={{ backgroundColor: "white", height: 22 }}>
        <img src={preloader} />
    </div>
}


export default Preloader;