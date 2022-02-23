import React from "react";
import {useDispatch} from "react-redux";

const Categories = ({items, onClickItem, activeCategory}) => {

    return (
        <div className="categories">
        <ul>
            <li className = {activeCategory === null ? 'active': ''} onClick={() => onClickItem(null)}>Все</li>
            {items.map((item, index) => <li key = {`${item}_${index}`} className = {activeCategory === index ? 'active': ''} onClick={() => onClickItem(index)}>{item}</li>)}

        </ul>
        </div>
    )
}
export default Categories;