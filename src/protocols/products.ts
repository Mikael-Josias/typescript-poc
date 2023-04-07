
export type ProductsEntity = {
    id: number,
    name: string,
    price: number,
    stock: number
}

export type Product = Omit<ProductsEntity, "id"> 