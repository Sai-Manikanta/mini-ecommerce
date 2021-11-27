import { useState, useEffect } from 'react';
import useGetData from '../hooks/useGetData';
import Product from './Product';

function Products() {
    const [count, setCount] = useState(4);
    const [products, setProduct] = useState([]);
    const { data, loading, error } = useGetData(`http://localhost:3000/products?_start=${count - 4}&_end=${count}`);

    useEffect(() => {
        setProduct([ ...products, ...data ])
    }, [data])


    return (
        <div className="flex-grow">
            <h2 className="text-3xl font-bold tracking-wide mb-6">
                Products
            </h2>

            {loading && <h2 className="text-center text-2xl mt-6">Loading...</h2>}
            {error && <h2 className="text-center text-2xl mt-6">Error...</h2>}

            <div>
                <div className="grid grid-cols-4 space-x-3 space-y-3">
                    {(products.length > 0) && products.map(product => (
                        <Product key={product.id} {...product} />
                    ))}
                </div>
                <button onClick={() => setCount(c => c + 4)}>
                    Load More
                </button>
            </div>
        </div>
    )
}

export default Products
