import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItemToCart } from './redux/actions';

function MenuItem({ item }) {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItemToCart({ item, quantity }));
  };

  return (
    <div>
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <p>Price: ${item.price}</p>
      <label>
        Quantity:
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </label>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

// in the reducer
const initialState = {
    cart: []
};

export function cartReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_ITEM_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    default:
      return state;
  }
}

// in the actions
export function addItemToCart(payload) {
  return { type: 'ADD_ITEM_TO_CART', payload };
}
