const product = [
    {
        id: '1',
        name: 'Diario de una Pasión',
        price: 10,
        category: 'romantica',
        duration: '120',
        img: '',
        stock: 25,
        description: 'Es una pelicula romantica'
    },
    {
        id: '2',
        name: 'Star Wars',
        price: 200,
        category: 'fantasia',
        duration: '140',
        img: '',
        stock: 2,
        description: 'Es todo lo que esta bien'
    },
    {
        id: '3',
        name: 'Loco por Mary',
        price: 20,
        category: 'comedia',
        duration: '90',
        img: '',
        stock: 2,
        description: 'Muy graciosa'
    },
    {
        id: '4',
        name: '6to Sentido',
        price: 120,
        category: 'suspenso',
        duration: '90',
        img: '',
        stock: 5,
        description: 'A verla hasta el final'
    },
    {
        id: '5',
        name: 'El conjuro',
        price: 120,
        category: 'terror',
        duration: '95',
        img: '',
        stock: 5,
        description: 'Para verla a oscuras'
    },
    {
        id: '6',
        name: 'Tonto y retonto',
        price: 20,
        category: 'comedia',
        duration: '100',
        img: '',
        stock: 3,
        description: 'Clasico'
    },
    {
        id: '7',
        name: 'Harry Potter',
        price: 200,
        category: 'fantasia',
        duration: '340',
        img: '',
        stock: 5,
        description: 'Magia por aqui y magia por alla'
    },
]

export const getProduct = () => { 
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve (product)
        }, 500);
    }
    )
}

export const getProductById = (productId) => { /* productId recibido por parametro */
    return new Promise ((resolve) => {
        setTimeout(() => {
            /* busco por ID con el find*/
            resolve (product.find(prod => prod.id === productId))
        }, 500);
    }
    )
}

export const getProductByCategory = (productCategory) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            /* busco por ID con el find*/
            resolve (product.filter(prod => prod.category === productCategory))
        }, 500);
    }
    )
}