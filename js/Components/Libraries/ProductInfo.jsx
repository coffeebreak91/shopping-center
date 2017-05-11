import React from 'react'
import AddToCartForm from './AddToCartForm.jsx'

class ProductInfo extends React.Component {
    render() {
        return <div className="product-info pull-right">
            <div className="title">
                <h2>{this.props.name}</h2>
                <span>({this.props.price} PLN)</span>
            </div>
            <hr />
            <div className="description">
                {this.props.description}
            </div>
            <hr />
            <div className="add-to-cart">
                {
                  this.props.available ? <AddToCartForm
                            btnHandleClick={this.props.btnHandleClick}
                            qntHandleChange={this.props.qntHandleChange}
                            quantity={this.props.quantity} /> : <span className="unavailable">Product unavailable</span>
                }
            </div>
        </div>
    }
}

export default ProductInfo
