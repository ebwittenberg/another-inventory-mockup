import React from 'react'
import { Item } from './Item'

const InventoryList = (props) => {
    const { inventory, incrementStock } = props
    return (
        <table>
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Stock</th>
                </tr>

                {
                    inventory.inventory.map(i => <Item increaseStock={incrementStock} item={i}/>)
                }
            </tbody>
        </table>
    )
}

export default InventoryList