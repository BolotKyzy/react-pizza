
const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0
};

const getTotalPrice = arr => arr.reduce((sum, obj) => obj.price+sum, 0);

const cart = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PIZZA_CART': {
            const currentPizzaItems =  !state.items[action.payload.id] ?[action.payload] : [
                ...state.items[action.payload.id].items,
                action.payload
            ];
            const newItems = {
                ...state.items,
                [action.payload.id] : {
                    items: currentPizzaItems,
                    totalPrice : getTotalPrice(currentPizzaItems)
                }

            }
            const items = Object.values(newItems).map(obj => obj.items);
            const allArrPizzas = [].concat.apply([], items );
            let obj = {
                ...state,
                items : newItems,
                totalCount: allArrPizzas.length,
                totalPrice: getTotalPrice(allArrPizzas)
            }
            return obj;

        }
        case 'CLEAR_CART' :
            return {
                totalPrice: 0,
                totalCount: 0,
                items: {}
            }
        case 'REMOVE_CART_ITEM': {
            const newItems = {
                ...state.items
            };
            const currentTotalPrice = newItems[action.payload].totalPrice;
            const currentTotalCount = newItems[action.payload].items.length;

            delete newItems[action.payload];
            return {
                ...state,
                items: newItems,
                totalCount: state.totalCount + 1,
                totalPrice: state.totalPrice + state.items[action.payload].items[0].price
            };
        }
        case 'MINUS_CART_ITEM' :
            const oldItems = state.items[action.payload].items;
            const newMinesItems = oldItems.length >1 ? state.items[action.payload].items.slice(1) : oldItems;
            return {
                ...state,
                items: {
                    ...state.items,
                    [action.payload] : {
                        items: newMinesItems,
                        totalPrice: getTotalPrice(newMinesItems)

                    }
                },
                totalCount:state.totalCount - 1,
                totalPrice: state.totalPrice - newMinesItems[action.payload].price

            }
        case 'PLUS_CART_ITEM':
            const newItems = [
                ...state.items[action.payload].items,
                state.items[action.payload].items[0],
            ];
            return {
                ...state,
                items: {
                    ...state.items,
                    [action.payload] : {
                        items: newItems,
                        totalPrice: getTotalPrice(newItems)

                    }
                },
                totalCount: state.totalCount +1,
                totalPrice: state.totalPrice + newItems[action.payload].price
            }
        default:
            return state;

    }

}


export default cart;