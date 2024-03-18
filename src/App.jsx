import { useState } from 'react'
import './App.css'
import '/node_modules/bootstrap/dist/css/bootstrap.css'
import '/node_modules/bootstrap-icons/font/bootstrap-icons.css'
import Card from './Card'
import './styles.css'
import Popup from './modal'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  var data = [
    {
      id: 1,
      sourceimg: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      name: "Fancy Product",
      price: 40.00,
      starfocus: false,
    },
    {
      id: 2,
      sourceimg: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      name: "Special Item",
      price: 18.00,
      starfocus: true,
    },
    {
      id: 3,
      sourceimg: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      name: "Sale Item",
      price: 50.00,
      starfocus: false,
    },
    {
      id: 4,
      sourceimg: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      name: "Popular Item",
      price: 90.00,
      starfocus: true,
    },
    {
      id: 5,
      sourceimg: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      name: "Sale Item",
      price: 25.00,
      starfocus: false,
    },
    {
      id: 6,
      sourceimg: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      name: "Fancy Product",
      price: 120.00,
      starfocus: false,
    },
    {
      id: 7,
      sourceimg: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      name: "Special Item",
      price: 38.00,
      starfocus: true,
    },
    {
      id: 8,
      sourceimg: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      name: "Popular Item",
      price: 60.00,
      starfocus: true,
    },
  ]

  const [Cart, setCart] = useState([])
  const [total, setTotal] = useState(0)

  let addtoCart = (product) => {
    setCart([...Cart, product])
    setTotal(total + product.price)
  }

  let removefromCard = (data) => {
    var newCart = Cart.filter((list) => data.id !== list.id)
    setCart(newCart);
    setTotal(total - data.price)
  }

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container px-4 px-lg-5">
          <a class="navbar-brand" href="#!">Start Bootstrap</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li class="nav-item"><a class="nav-link active" aria-current="page" href="#!">Home</a></li>
              <li class="nav-item"><a class="nav-link" href="#!">About</a></li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#!">All Products</a></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li><a class="dropdown-item" href="#!">Popular Items</a></li>
                  <li><a class="dropdown-item" href="#!">New Arrivals</a></li>
                </ul>
              </li>
            </ul>

            <Popup Cart={Cart} removefromCard={removefromCard} addtoCart={addtoCart} total={total} />

          </div>
        </div>
      </nav>

      <header class="bg-dark py-5">
        <div class="container px-4 px-lg-5 my-5">
          <div class="text-center text-white">
            <h1 class="display-4 fw-bolder">Shop in style</h1>
            <p class="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
          </div>
        </div>
      </header>
      <section class="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {
              data.map((products, index) => {
                return <Card key={index} product={products} addtoCart={addtoCart} Cart={Cart} />
              })
            }
          </div>

        </div>
      </section>

      <footer class="py-5 bg-dark">
        <div class="container"><p class="m-0 text-center text-white">Copyright &copy; Your Website 2023</p></div>
      </footer>
    </>
  )
}

export default App


