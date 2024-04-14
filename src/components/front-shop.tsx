//import { Product } from "@medusajs/medusa";
import { useProducts } from 'medusa-react';

export function Products({ limit }) {
    const { products, isLoading } = useProducts({ limit: limit });

    return isLoading ? (
        <div>Loading...</div>
    ) : (
        <>
            {products?.map((product, i) => (
                <div
                    key={i}
                    className="shop-card z-50 transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-200 cursor-pointer"
                >
                    <div className="card-pic h-full w-full">
                        <img
                            className="h-full w-full"
                            src={product.thumbnail}
                            alt=""
                        />
                    </div>
                    <div className="font-bold absolute">{product.title}</div>
                    <div className="text-sm"></div>
                </div>
            ))}
        </>
    );
}
