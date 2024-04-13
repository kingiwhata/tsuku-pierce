//import { Product } from "@medusajs/medusa";
import { useProducts } from "medusa-react";

export function Products() {
    const { products, isLoading } = useProducts();

    return isLoading ? (
        <div>
            Loading...
        </div>
    ) : (
        <>
            {products?.map((product, i) => (
                <div key={i} className="shop-card">
                    <div className="card-pic"></div>
                    {product.title}
                </div>
            ))}
        </>
    )
}
