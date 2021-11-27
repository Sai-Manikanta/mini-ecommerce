import { useState, useEffect  } from 'react'
import axios from 'axios'

function Cart() {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/cart')
          .then(res => setCart(res.data))
          .catch(err => console.log(err.mesage))
    }, [])

    const removeFromCart = id => {
        axios.delete(`http://localhost:3000/cart/${id}`)
          .then(res => {
            const cartProductsAfterDelete = cart.filter(product => product.id !== id);
            setCart(cartProductsAfterDelete);
          })
          .catch(err => console.log(err.message))
    }

    const incrementProductQunatity = (id, quantity) => {
        axios.patch(`http://localhost:3000/cart/${id}`, { quantity: quantity + 1  })
         .then(res => {
            const updatedCart = cart.map(product => product.id === id ? { ...product, quantity: quantity + 1 } : product);
            setCart(updatedCart);
         })
         .catch(err => console.log(err.message))
    }

    const decrementProductQunatity = (id, quantity) => {
        axios.patch(`http://localhost:3000/cart/${id}`, { quantity: quantity - 1  })
         .then(res => {
            const updatedCart = cart.map(product => product.id === id ? { ...product, quantity: quantity - 1 } : product);
            setCart(updatedCart);
         })
         .catch(err => console.log(err.message))
    }

    return (
        <div>
            {cart.length === 0 ? (
                <p>your cart is emty 🙁</p>
            ) : (
                <>
                    {cart.map(product => (
                        <div key={product.id}>
                            <img src={product.image} style={{ height: '150px' }} alt={product.title} />
                            <p>{product.title}</p>
                            <div>
                                <button onClick={() => incrementProductQunatity(product.id, product.quantity)}>+</button>
                                <p>{product.quantity}</p>
                                <button onClick={() => decrementProductQunatity(product.id, product.quantity)}>-</button>
                            </div>
                            <button onClick={() => removeFromCart(product.id)}>Remove from Cart</button>
                        </div>
                    ))}
                </>
            )}
        </div>
    )
}

export default Cart
