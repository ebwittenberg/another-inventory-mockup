import { connect } from 'react-redux'
import InventoryList from '../components/InventoryList'
import { incrementStock } from '../inventoryActions'

function mapStateToProps(state) {
    return {
        inventory: state
    }
}

const mapDispatchToProps = {
        incrementStock
}

export default connect(mapStateToProps, mapDispatchToProps)(InventoryList)