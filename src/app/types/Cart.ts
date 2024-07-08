export interface Cart {
    items: Array<{
        title: string;
        thumbnail: string;
        quantity: number;
    }>;
}
