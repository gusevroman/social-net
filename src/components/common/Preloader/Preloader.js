import React from 'react';
import preloader from '../../../assets/images/loader.gif';


let Preloader = (props) => {
    return <div style={{ backgroundColor: "grey", height: 0 }}>
        <img style={{ height: '100px' }} src={preloader} />
    </div>
}


export default Preloader;