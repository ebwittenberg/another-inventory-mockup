import React from 'react'
import { Item } from './Item'

const InventoryList = (props) => {
    const { inventory, incrementStock, onShowTodo, todo } = props
    console.log(todo.title)

    const rowStyle= {
        color: 'blue'
    }
    return (
        <div>
            <table>
                <tbody>
                    <tr style={rowStyle}>
                        <th>Name</th>
                        <th>Stock</th>
                    </tr>

                    {
                        inventory.map(i => <Item increaseStock={incrementStock} item={i} key={i.id}/>)
                    }
                </tbody>
            </table>
            <button
                onClick={onShowTodo}
            >
                Click Me
            </button>
            <h2>{todo.title}</h2>
        </div>
    )
}

export default InventoryList