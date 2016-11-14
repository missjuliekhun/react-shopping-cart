import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import uuid from 'uuid'

const CartItem = props => {
  let { name, quantity, cost, imgUrl, } = props.item
  let { onUpdateQuantity, index } = props

  return (
    <div className="item">
      <img src={imgUrl} alt={name} />
      <div className="half">
        {name}
      </div>
      <div className='half'>
        <span className='circle' onClick={ e => onUpdateQuantity(-1, index) }>-</span>
        <span className='pad-left pad-right'>{quantity}</span>
        <span className='circle' onClick={e => onUpdateQuantity(1, index) }>+</span>
        <strong className='right'>${cost}</strong>
      </div>
      <hr />
      <div>
        <a href='#'>remove</a><br />
        <label>
          <input type='checkbox'/> wrap it for $5.99
        </label>
      </div>
    </div>
  )
}

class ShoppingCart extends Component {
  constructor(props){
    super(props)
    // initialize state
    this.state = {
      items: [
        { name: "Gaiam Kids Yoga Headband - Pink/Blue", quantity: 1, cost: 9.38, imgUrl: "https://scene7-secure.targetimg1.com/is/image/Target/39598742?wid=90&hei=90" },
        { name: "Hamburger Helper", quantity: 1, cost: 11.52, imgUrl: "https://scene7-secure.targetimg1.com/is/image/Target/12953828?wid=90&hei=90" },
      ],
      subtotal: 0,
      taxPercent: 5,
      taxTotal: 0,
      deliveryFee: 0,
      orderTotal: 0,
      orderNum: uuid.v4()
    }
    // bind passed down methods to instance
    this.updateQuantity = this.updateQuantity.bind(this)
  }

  componentDidMount(){
    this.calcTotal()
  }

  updateQuantity(quantity, index){
    let oldItems = this.state.items.slice()
    let item = oldItems[index]
    item.quantity = item.quantity + quantity < 0 ? 0 : item.quantity + quantity
    this.setState({
      items: oldItems
    }, this.calcTotal)
  }

  calcTotal(){
    let {items, taxPercent, deliveryFee } = this.state
    let subtotal = items
      .filter(item => item.quantity > 0)
      .map(item => item.cost * item.quantity)
      .reduce((prev, curr) => prev + curr, 0)

    let taxTotal = Math.round((subtotal * (taxPercent / 100)) * 100) / 100
    let orderTotal = subtotal + taxTotal + deliveryFee

    this.setState({
      subtotal,
      taxTotal,
      orderTotal,
    })
  }


  render(){
    let items = this.state.items.map( (item, i) => {
      return (
        <CartItem item={item} key={i} index={i} onUpdateQuantity={this.updateQuantity} />
      )
    })
    let numItems = this.state.items.map(item => item.quantity).reduce((prev, curr) => prev + curr, 0)
    let delivery = this.state.deliveryFee === 0 ? "Free" : `$${this.state.deliveryFee}`
    return (
      <div className='cart'>
        <div className='items'>
          <h2>cart total: <span>${this.state.orderTotal.toFixed(2)}</span></h2>
          <div className='half right'>
            <a href='#' className='checkout'>I'm ready to checkout</a>
          </div>
          {items}
        </div>
        <div className='summary'>
          <h3>order summary</h3>
          <div>
            <strong>subtotal</strong>
            <small> ({numItems} items)</small>
            <strong className='right'>${this.state.subtotal.toFixed(2)}</strong>
          </div>
          <div>
            <strong>delivery</strong>
            <strong className='right red'>{delivery}</strong>
          </div>
          <div>
            <strong>estimated tax</strong>
            <strong className='right'>${this.state.taxTotal.toFixed(2)}</strong>
          </div>
          <hr/>
          <h3>total <span className='right'>${this.state.orderTotal.toFixed(2)}</span></h3>
          <hr/>
          <small>cart number: {this.state.orderNum}</small>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <ShoppingCart />,
  document.getElementById('root')
);
