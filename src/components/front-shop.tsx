//import { Product } from "@medusajs/medusa";
import { useProducts } from "medusa-react";

function fetchProducts() {
    const { products, isLoading } = useProducts();

    return isLoading ? (
        <div>
            Loading...
        </div>
    ) : (
        <div>
            {products?.map((product, i) => (
                <div key={i}>
                    {product.title}
                </div>
            ))}
        </div>
    )
}

export default fetchProducts;
