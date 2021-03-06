import { createStore, applyMiddleware } from 'redux'
import { inventoryReducer } from './reducers/inventory'
import thunk from 'redux-thunk';

const initialState = {
    inventory: [
        {
            id: 1001,
            name: 'dining table', 
            stock: '50',
            cost: 475.99,
            warehouseID: 23
        },
        {
            id: 1002,
            name: 'patio chair', 
            stock: 12,
            cost: 50.99,
            warehouseID: 23
        },
        {
            id: 1003,
            name: 'outdoor sofa', 
            stock: '14',
            cost: 498.99,
            warehouseID: 23
        },
        {
            id: 1004,
            name: 'bar stool', 
            stock: '32',
            cost: 67.99,
            warehouseID: 23
        },
        {
            id: 1005,
            name: 'outdoor pillow', 
            stock: 32,
            cost: 54.99,
            warehouseID: 23
        }
    ],
    todo: {}
}

export const store = createStore(inventoryReducer, initialState, applyMiddleware(thunk))