import React, { useContext } from 'react'
import './placeorder.css'
import { StoreContext } from '../../context/StoreContext'
const  Placeorder = () => {
  const {getTotal}=useContext(StoreContext);
  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className="title"> Delivery Information </p>
        <div className="multi-fields">
          <input type="text" placeholder='First Name' />
          <input type="text" placeholder='Last Name' />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='Email Address' />
          <input type="text" placeholder='Address 1' />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='Address 2' />
          <input type="text" placeholder='City' />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='Phone Number' />
        </div>
      </div>

      <div className="place-order-right">
      <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
          <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotal()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotal()===0?0:2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total Cost</b>
              <b>${getTotal()===0?0:getTotal() + 2}</b>
            </div>
          </div>
          <button>Proceed to Payment</button>
        </div>

      </div>
    </form>
  )
}

export default  Placeorder
