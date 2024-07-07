export interface Product {
    title: string;
    description: string;
    thumbnail: string;
    images: { url: string }[];
    options: Option[];
    variants: Variant[];
}

export interface Variant {
    options: { value: string }[];
    prices: Price[];
    id: string;
}

interface Option {
    values: { value: string }[];
}

interface Price {
    amount: number;
    currency_code: string;
}
