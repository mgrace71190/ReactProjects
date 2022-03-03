import React from 'react';
// used to be a function
const Header = (props) => {
    return (
        <header className="top">
        <h1>Catch
            <span className="ofThe">
            <span className="of">Of</span>
            <span className="the">The</span>
            </span>
            Day</h1>
    <h3 className="tagline">
        {/* this=com ponent instance, props=object inside the comonent */}
        <span>{props.tagline}</span>
    </h3>
    </header>
    );   
}

// class Header extends React.Component {
//     render() {
//         return (

// }
export default Header;