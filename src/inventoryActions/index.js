import axios from 'axios'
export const incrementStock = (itemId) => {
    console.log(itemId)
    return ({
        type: 'UPDATE_INVENTORY',
        payload: itemId
    })
}

export const showTodo = () => {
    return async dispatch => {
        const todoResponse = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
        dispatch(addTodoSuccess(todoResponse.data))

    }
}

const addTodoSuccess = todo => {
    return {
        type: 'ADD_TODO_SUCCESS',
        payload: {
            ...todo
        }
    }
}