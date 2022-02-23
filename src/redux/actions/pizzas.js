import axios from "axios";

export const setLoaded = (payload) => ({
    type: 'SET_LOADED',
    payload
})

export const fetchPizzas = (sortBy, category) => (dispatch) => {
    dispatch(setLoaded(false));
    axios.get(`/pizzas?${category !==null ? `category=${category}`: ''}&_sort=${sortBy}&_order=asc`)
        .then(res => {
            dispatch(setPizzas(res.data));
        })
}


const setPizzas = (items) => ({
    type: 'SET_PIZZAS',
    payload:items
});

export default setPizzas;