export const incrementStock = (itemId) => {
    return ({
        type: 'UPDATE_INVENTORY',
        payload: itemId
    })
}