const products = [
    {
        id: '1',
        name: 'Producto 1',
        price: 1000,
        category: 'Calzado Femenino',
        img: '',
        stock: 25,
        descripcion: 'Descripcion del producto 1 color 1'
    },
    {
        id: '2',
        name: 'Producto 2',
        price: 1100,
        category: 'Calzado Femenino',
        img: '',
        stock: 10,
        descripcion: 'Descripcion del producto 1 color 2'
    },
    {
        id: '3',
        name: 'Producto 3',
        price: 1200,
        category: 'Calzado Femenino',
        img: '',
        stock: 5,
        descripcion: 'Descripcion del producto 1 color 3'
    },
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve (products)
        }, 500);
    }
    )
}