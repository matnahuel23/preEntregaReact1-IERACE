import './ItemList.css'
import Item from '../Item/Item'

const ItemList =({product}) => {
    return (
        <div className='ListGroup'>
            {/* lista productos */}
            {product.map(prod => <Item key={prod.id} {...prod} />)}
        </div>
    )
}

export default ItemList