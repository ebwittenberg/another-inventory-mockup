import React from 'react'

export const Item = ({ item, increaseStock }) => {
    const { id, name, stock} = item

    return (
        <tr>
            <td>{name}</td>
            <td>{stock}</td>
            <td
            onClick={() => increaseStock(id)}
            >
                +
            </td>
        </tr>
    )
}