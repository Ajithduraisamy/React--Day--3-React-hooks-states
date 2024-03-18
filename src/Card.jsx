import React from 'react'

function Card({ product, addtoCart, Cart }) {
    return (
        <>
            <div className="col mb-5">
                <div className="card h-100">
                    <img className="card-img-top" src={product.sourceimg} alt="..." />
                    <div className="card-body p-4">
                        <div className="text-center">
                            <h5 className="fw-bolder">{product.name}</h5>
                            <div className="d-flex justify-content-center small text-warning mb-2">
                                <div className={`${product.starfocus ? 'bi-star-fill' : ''}`}></div>
                                <div className={`${product.starfocus ? 'bi-star-fill' : ''}`}></div>
                                <div className={`${product.starfocus ? 'bi-star-fill' : ''}`}></div>
                                <div className={`${product.starfocus ? 'bi-star-fill' : ''}`}></div>
                                <div className={`${product.starfocus ? 'bi-star-fill' : ''}`}></div>
                            </div>
                            {`$${product.price}.00`}
                        </div>
                    </div>
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div className="text-center">
                            <button onClick={() => { addtoCart(product) }} className="btn btn-outline-dark mt-auto" disabled={Cart.some(item => item.id === product.id)}>Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card