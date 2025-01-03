export default {
    name: 'Product',
    type: 'document',
    title: 'Product',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name of Product',
        },
        {
            name: 'images',
            type: 'array',
            title: 'Product Images',
            of: [{ type: 'image' }],
        },
        {
            name: 'description',
            type: 'text',
            title: 'Description of Product',
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Product Slug',
            options:{source:'name'},
        },
        {
            name: 'price',
            type: 'number', // Correct type for a price field
            title: 'Price of Product',

        },
        {
            name:'category',
            type:'reference',
            title:'Product Category',
           to:[
            {
                type:'category',

            }
           ]
        }
    ],
};