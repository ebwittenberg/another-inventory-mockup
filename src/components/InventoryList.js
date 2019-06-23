import React from 'react'
import { Item } from './Item'

class InventoryList extends React.Component {
    constructor(props) {
        super(props)
    }

    createNums = () => {
        const numArray = []
        for (let i = 1; i < 10; i++) {
            numArray.push(
                <h2
                    onClick={() => this.props.onShowTodo(i)}
                >
                    {i}
                </h2>
            )
        }
        return numArray
    }
    
    render() {
        const { inventory, incrementStock, onShowTodo, todo } = this.props
    
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
                <div
                >
                    {
                        this.createNums()
                    }
                </div>
                
                <h2>{todo.title}</h2>
            </div>
        )

    }
}

export default InventoryList