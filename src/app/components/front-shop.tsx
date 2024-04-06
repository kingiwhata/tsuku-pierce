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
            {products?.map((product) => (
                <div>
                    {product.title}
                </div>
            ))}
        </div>
    )
}

export default fetchProducts;
