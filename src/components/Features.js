import React from 'react';
import { useEffect } from 'react';

function Features () {

    useEffect(() => {
        console.log(localStorage);
        // if (!localStorage.getItem("loggedIn")) {
        //     localStorage.setItem("loggedIn", false)
        }
    // }
    )

    return (
        <div>
            <h1>Features</h1>
        </div>
    )
}
export default Features;
