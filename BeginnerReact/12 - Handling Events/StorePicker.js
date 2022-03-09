import React from 'react';
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
    myInput = React.createRef();

    goToStore = event => {
        // 1. Stop the form from submitting
        event.preventDefault();
        // 2. Get the text from the input
        // console.log(this);
        const storeName = this.myInput.current.value;
        // 3. Change teh page to /store/whatever we entered
        this.props.history.push(`/store/${storeName}`);
    };
    render() {
        return (
        <form className="store-selector" onSubmit={this.goToStore}>
            <h2>Please Enter a store</h2>
            <input 
                type="text" 
                ref={this.myInput}
                required placegolder="Store Name" 
                defaultValue={getFunName()} 
                />
            <button type="submit">Visit Store</button>
        </form>
        );
    }
}

export default StorePicker;


//import react, make the storepicker, then export so it can be used in index.js