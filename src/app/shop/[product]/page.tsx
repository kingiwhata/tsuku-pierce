import { getAllProducts } from '../../../utils/products';

interface Product {
    title: string;
    thumbnail: string;
    images: Array<{
        url: string;
    }>;
}

const products = async () => await getAllProducts();

export async function generateStaticParams() {
    const res: Array<Product> = await products();
    return res.map((product: Product) => ({
        product: product.title.split(' ').join('-').toLowerCase(),
    }));
}

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

    const product: Product = allProducts.find(
        (p: { title: string }) => p.title === title,
    );
    return (
        <section>
            <div className="w-full py-24 px-60 flex flex-row gap-8">
                <div className="w-1/5 flex flex-col gap-4">
                    {product.images.map((imgObject: { url: string }) => (
                        <img src={imgObject.url} />
                    ))}
                </div>
                <div className="w-3/5">
                    <img src={product.thumbnail} alt="" />
                </div>
                <div className="w-1/5 bg-green-200"></div>
            </div>
        </section>
    );
}
