const products = [
    {
        id: '1',
        name: 'Producto 1',
        price: 1000,
        category: 'Calzado Femenino',
        img: '',
        stock: 25,
        description: 'primero'
    },
    {
        id: '2',
        name: 'Producto 2',
        price: 1100,
        category: 'Calzado Femenino',
        img: '',
        stock: 10,
        description: 'segundo'
    },
    {
        id: '3',
        name: 'Producto 3',
        price: 1200,
        category: 'Calzado Femenino',
        img: '',
        stock: 5,
        description: 'tercero'
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

export const getProductsById = (productId) => { /* productId recibido por parametro */
    return new Promise ((resolve) => {
        setTimeout(() => {
            /* busco por ID con el find*/
            resolve (products.find(prod => prod.id === productId))
        }, 500);
    }
    )
}