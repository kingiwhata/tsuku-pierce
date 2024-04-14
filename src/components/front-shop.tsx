//import { Product } from "@medusajs/medusa";
import { useProducts } from 'medusa-react';

export function Products({ limit }) {
    const { products, isLoading } = useProducts({ limit: limit });

    return isLoading ? (
        <div>Loading...</div>
    ) : (
        <>
            {products?.map((product, i) => (
                <div key={i} className="shop-card z-50">
                    <div className="card-pic">
                        <img src={product.thumbnail} alt="" />
                    </div>
                    <div className="font-bold absolute">{product.title}</div>
                    <div className="text-sm"></div>
                </div>
            ))}
        </>
    );
}
