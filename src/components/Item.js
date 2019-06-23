import React from 'react'

export const Item = ({ item, increaseStock }) => {
    const { id, name, stock} = item

    const tdStyle= {
        border: '1px solid black'
    }

    return (
        <tr>
            <td style={tdStyle}>{name}</td>
            <td style={tdStyle}>{stock}</td>
            <td
            onClick={() => increaseStock(id)}
            >
                +
            </td>
        </tr>
    )
}