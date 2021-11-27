import { Link } from 'react-router-dom'

function Product({ id, title, image, price, rating }) {
    return (
        <div className="p-8 border rounded">
            <img src={image} alt={title} className="h-36 mx-auto" />
            <div className="mt-6">
                <h2 className="truncate text-lg">{title}</h2>
                <div className="flex justify-between mt-2">
                    <p>{price}</p>
                    <p>{rating.rate}</p>
                </div>
                <Link to={`/product/${id}`}>Visit</Link>
            </div> 
        </div>
    )
}

export default Product
