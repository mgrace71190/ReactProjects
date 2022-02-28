import React, { Fragment } from 'react';

class StorePicker extends React.Component {
    render() {
        return (
        <form className="store-selector">
            <h2>Please Enter a store</h2>
            <input type="text" required placegolder="Store Name"/>
            <button type="submit">Visit Store</button>
        </form>
        )
    }
}

export default StorePicker;


//import react, make the storepicker, then export so it can be used in index.js