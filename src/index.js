import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import addMore from './newItem';

class ShoppingCart extends React.Component {
  render(){
    return (
      <div className='cart'>
        <div className='items'>
          <h2>cart total: <span>$9.38</span></h2>
          <div className='half right'>
            <a href='#' className='checkout'>i'm ready to checkout</a>
          </div>
          <div className='item'>
            <img  src='https://scene7-secure.targetimg1.com/is/image/Target/39598742?wid=90&hei=90' />
            <div className='half'>
              Gaiam Kids Yoga Headband - Pink/Blue
            </div>
            <div className='half'>
              <span className='circle'>-</span>
              <span className='pad-left pad-right'>1</span>
              <span className='circle'>+</span>
              <strong className='right'>$27.92</strong>
            </div>
            <hr />
            <div>
              <a href='#'>remove</a><br />
              <label>
                <input type='checkbox'/> wrap it for $5.99
              </label>
            </div>
          </div>
          <div className='item'>
            <img  src='https://scene7-secure.targetimg1.com/is/image/Target/12953828?wid=90&hei=90' />
            <div className='half'>
              Gaiam Kids Yoga Headband - Pink/Blue
            </div>
            <div className='half'>
              <span className='circle'>-</span>
              <span className='pad-left pad-right'>1</span>
              <span className='circle'>+</span>
              <strong className='right'>$27.92</strong>
            </div>
            <hr />
            <div>
              <a href='#'>remove</a><br />
              <label>
                <input type='checkbox'/> wrap it for $5.99
              </label>
            </div>
          </div>
        </div>
        <div className='summary'>
          <h3>order summary</h3>
          <div>
            <strong>subtotal</strong>
            <small> (3 items)</small>
            <strong className='right'>$8.98</strong>
          </div>
          <div>
            <strong>delivery</strong>
            <strong className='right red'>free</strong>
          </div>
          <div>
            <strong>estimated tax</strong>
            <strong className='right'>$0.40</strong>
          </div>
          <hr/>
          <h3>total <span className='right'>$9.38</span></h3>
          <hr/>
          <small>cart number: 1016396673255</small>
        </div>
      </div>
    )
  }
}
ReactDOM.render(
  <ShoppingCart />,
  document.getElementById('root')
);
