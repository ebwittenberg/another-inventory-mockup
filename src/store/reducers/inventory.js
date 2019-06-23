export function inventoryReducer(state='', action) {
    switch(action.type) {
        case 'UPDATE_INVENTORY': 
            const newInventoryArray = state.inventory.map(item => {
                console.log(action.payload)
                if (item.id === action.payload) {
                    return {
                        // the whole item
                        ...item,
                        // with the stock changed
                        stock: parseInt([item.stock]) + 1
                    }
                } else {
                    // just return the item object as is
                    return {
                        ...item
                    }
                }
            })

            return {
                ...state,
                // create new inventory array
                inventory: newInventoryArray
            }
        case 'ADD_TODO_SUCCESS':
            console.log('add todo success is being called')
            console.log(action.payload)
            return {
                ...state,
                todo: action.payload
            }
        default:
            return state;
    }
}