import { getAllProducts } from '../../../utils/products';
import { useProducts } from 'medusa-react';

interface Product {
    title: string;
    description: string;
    thumbnail: string;
    images: Array<{
        url: string;
    }>;
    options: Array<{
        values: Array<{
            value: string;
        }>;
    }>;
    variants: Array<VariantData>;
}

interface VariantData {
    options: Array<{
        value: string;
    }>;
    prices: Array<{
        amount: number;
        currency_code: string;
    }>;
}

const products = async () => await getAllProducts();

//export async function generateStaticParams() {
//    const res: Array<Product> = await products();
//    console.log(res);
//    return res.map((product: Product) => ({
//        product: product.title.split(' ').join('-').toLowerCase(),
//    }));
//}

export default async function Page({
    params,
}: {
    params: { product: string };
}) {
    const title = params.product
        .split('-')
        .join(' ')
        .replace(/(^\w|\s\w)/g, (m) => m.toUpperCase());
    const allProducts = await products();
    console.log(allProducts);
    const product: Product = allProducts.find(
        (p: { title: string }) => p.title === title,
    );
    const productColours = Array.from(
        new Set(product.options[1]?.values.map((x) => x.value)),
    );

    return (
        <section className="text-black h-screen font-bebas">
            <div className="w-full h-full py-24 px-60 flex flex-row gap-8">
                <div className="w-1/5 h-full flex flex-col gap-4">
                    {product.images.map(
                        (imgObject: { url: string }, i: number) => (
                            <img
                                key={i}
                                className="h-1/4"
                                src={imgObject.url}
                            />
                        ),
                    )}
                </div>
                <div className="w-2/5 h-full">
                    <img className="h-full" src={product.thumbnail} alt="" />
                </div>
                <div className="gap-4 w-2/5 flex flex-col text-left p-8">
                    <div className="text-2xl text-black">{product.title}</div>
                    <div className="text-2xl text-black">$20</div>
                    <div>
                        <div className="text-2xl ">Description</div>
                        <div className="text-xl ">{product.description}</div>
                    </div>
                    <div className="text-2xl ">Colour</div>
                    <div className="flex flex-row gap-4">
                        {productColours.map((colour: string, i: number) => (
                            <div>{colour}</div>
                        ))}
                    </div>
                    <div className="flex flex-row gap-4 h-12">
                        <select
                            className="w-1/4 bg-gray-500 p-3"
                            name="item"
                            id=""
                        >
                            <option value="">1</option>
                        </select>
                        <button className="w-2/4 bg-gray-500">
                            Add To Cart
                        </button>

                        <button className="w-1/4 bg-gray-500">Favourite</button>
                    </div>
                    <div>
                        <div className="text-2xl ">Shipping & Returns</div>
                        <div className="text-xl">
                            Free returns within 14 days & Free shipping on
                            orders over $80
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
