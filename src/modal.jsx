import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartItem from './CartItem';
import React from 'react'

function Popup({ Cart, removefromCard, total }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <button class="btn btn-outline-dark" onClick={handleShow}>
                <i class="bi-cart-fill me-1"></i>
                cart
                <span class="badge bg-dark text-white ms-1 rounded-pill">{Cart.length}</span>
            </button>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title> <h3>Cart Items</h3> </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <>
                        {
                            Cart.length == 0 ? <div> Currently no items found in cart. </div> : <>
                                <div>
                                    <ol class="list-group list-group-numbered">
                                        {Cart.map((item, index) => {
                                            return <CartItem item={item} key={index} removefromCard={removefromCard} />
                                        })}
                                    </ol>
                                    <h3 class="list-group-item list-group-item-danger">Total={total}</h3>
                                </div>
                            </>
                        }
                    </>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Popup;