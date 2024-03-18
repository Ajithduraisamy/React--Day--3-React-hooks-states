import React from 'react'
function CartItem({ item, removefromCard }) {
  return (
    <>
      <li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
          <div class="fw-bold">{item.name}</div>
          <h6>{`$ ${item.price}`}</h6>
        </div>
        <button onClick={() => removefromCard(item)} class="badge text-bg-primary rounded-pill">X</button>
      </li>
    </>
  )
}

export default CartItem