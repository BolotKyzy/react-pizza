import React from "react";
import {Categories, PizzaItem, SortPopUp} from "../components";
import {useSelector} from "react-redux";
import {setCategory, setSortBy} from "../redux/actions/filters";
import { useDispatch} from "react-redux";
import {fetchPizzas} from "../redux/actions/pizzas";
import PizzaLoadingBlock from "../components/PizzaLoadingBlock";
import {addPizzaToCart} from "../redux/actions/cart";

const sortItems = [
    { name: 'популяности', type: 'popular'},
    { name: 'цене', type: 'price'},
    { name: 'алфавиту', type: 'name'}
];
const categoryItems = ['Мясные', 'Острые', 'Вегетарианская', 'Гриль', 'Закрытые'];
const Home = () => {
    const items = useSelector(({pizzas}) => pizzas.items);
    const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded);
    const { category, sortBy } = useSelector(({filters}) => filters);
    const cartItems = useSelector(({cart}) => cart.items);
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(fetchPizzas(sortBy, category));

    }, [category, sortBy])



    return (
        <div className="container">
            <div className="content__top">
                <Categories activeCategory = {category} onClickItem = {index => dispatch(setCategory(index))}  items = {categoryItems}/>
                <SortPopUp sortItems = {sortItems} activeSortType = {sortBy} onClickSortType={type => dispatch(setSortBy(type))}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    isLoaded ? items.map(item => <PizzaItem
                            key = {item.id}
                            {...item}
                            isLoaded={true}
                            addedCount = { cartItems[item.id] && cartItems[item.id].items.length}
                            onClickAddPizza = {(obj) => dispatch((addPizzaToCart(obj))) }
                        />) :
                    Array(10).fill(0).map((_, index) => <PizzaLoadingBlock key ={index}/>)
                }
            </div>
        </div>
    )
}

export default Home;