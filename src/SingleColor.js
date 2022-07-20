import React, { useState, useEffect } from 'react';
import rgbToHex from './utils';

const SingleColor = ({rgb, weight, index, hexValue}) => {
    const [alert, setAlert] = useState(false)
    const bcg = rgb.join(',');
    const styles = {
        backgroundColor: `rgb(${bcg})`
    }
    const hexColor = `#${hexValue}`
    //turns out that the hex value is in the object, so there's no need for the function. this is how we use the fxn, just in case. look below
   // const hex = rgbToHex(...rgb)

	return (
        <article className={`color ${index > 10 && 'color-light'}`} style={styles}>
            <p className='percent-value'>
                {weight}%
            </p>
            <p className='color-value'>
               {hexColor}
            </p>
        </article> 
    )
};

export default SingleColor;
