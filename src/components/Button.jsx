import React from "react";
import {NavLink} from "react-router-dom";

const Button = (props) => {
    return (
        <NavLink to="/cart">
            <button className='button button--cart'>
                {props.children}
            </button>
        </NavLink>

    )
}
export default Button;