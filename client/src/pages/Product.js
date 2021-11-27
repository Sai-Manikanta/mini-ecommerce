import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function Product() {
    const [product, setProduct] = useState();
    const { productId } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:3000/products/${productId}`)
         .then(res => setProduct(res.data))
         .catch(err => console.log(err.message))
    }, [])

    const addToCart = () => {
        axios.post('http://localhost:3000/cart', { ...product, quantity: 1 })
         .then(res => alert('Added to cart'))
         .catch(err => console.log(err.message))
    }

    return (
        <div>
            {product !== undefined && (
                <>
                    <img src={product.image} alt={product.title} />
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                    <button onClick={addToCart}>
                        Add to Cart
                    </button>
                </>
            )}
        </div>
    )
}

export default Product
