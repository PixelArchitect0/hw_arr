// 1
const users = [
    { id: 1, name: 'Anna', email: 'ANNA@MAIL.COM' },
    { id: 2, name: 'Bob', email: 'Bob@Mail.com' }
];

const result = users.map(user => {
    delete user.id;
    user.email = user.email.toLowerCase();
    return user
});

console.log(result);

//2.1
const items = [
    { name: 'Phone', inStock: true, discounted: false },
    { name: 'Headphones', inStock: true, discounted: true },
    { name: 'Charger', inStock: true, discounted: false }
];

const areAllInStock = (items) => {
    const result = items.every(item => {
        return item.inStock === true;
    });
    return result;
}

console.log(areAllInStock(items))

// 2.2
const areAllInStock = (items) => {
    let allInStock = true;
    for (const item of items) {
        if(item.inStock === false) {
            allInStock = false;
        }
    }
    return allInStock
}

console.log(areAllInStock(items))

//3
const posts = [
    {id: 101, title: 'Post 1'},
    {id: 102, title: 'Post 2'},
    {id: 103, title: 'Post 3'}
];

const removeById = (posts, id) => {
    const indexToRemove = posts.findIndex(el => {
        return el.id === id
    })
    posts.splice(indexToRemove, 1)
}


removeById(posts, 102)

console.log(posts)
