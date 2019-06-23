import { connect } from 'react-redux'
import InventoryList from '../components/InventoryList'
import { incrementStock, showTodo } from '../inventoryActions'

function mapStateToProps(state) {
    return {
        inventory: state.inventory,
        todo: state.todo
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        incrementStock: id => {
            dispatch(incrementStock(id))
        },
        onShowTodo: (todoNum) => {
            dispatch(showTodo(todoNum))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InventoryList)