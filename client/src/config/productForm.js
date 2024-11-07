export const addProductForm =[
    {
        label: 'Product Name',
        name: 'productName',
        componentType: 'input',
        type: 'text',
        placeHolder: 'Enter Product Name'
    },
    {
        label: 'Description',
        name: 'description',
        componentType: 'textarea',
        placeHolder: 'Enter Product Description'
    },
    {
        label: 'Product Category',
        name: 'category',
        componentType: 'select',
        options:[
            {id: "men" , label: "Men"},
            {id: "women" , label: "Women"},
            {id: "kids" , label: "Kids"},
        ],
        placeHolder: 'Enter Product Category'
    },
    {
        label: 'Product Brand',
        name: 'brand',
        componentType: 'select',
        options:[
            {id: "nike" , label: "nike"},
            {id: "adidas" , label: "adidas"},
            {id: "puma" , label: "puma"},
            {id: "zara" , label: "Kids"},
        ],
        placeHolder: 'Enter Product Brand'
    },
    {
        label: 'Price',
        name: 'price',
        componentType: 'input',
        type: 'number',
        placeHolder: 'Enter Product Price'
    },
    {
        label: 'Offer',
        name: 'Offer',
        componentType: 'input',
        type: 'number',
        placeHolder: 'Enter Product Offer'
    },
    {
        label: 'Total Stock',
        name: 'stock',
        componentType: 'input',
        type: 'number',
        placeHolder: 'Enter Total Stock'
    },
]