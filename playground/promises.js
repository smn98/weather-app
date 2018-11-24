let addSync = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a + b);
            } else {
                reject('Arguments must be numbers');
            }
        }, 1500);
    });
};

addSync('a;jdf', 5)
.then((result) => {
    console.log('Result: ', result);
})
.catch((error) => {
    console.log('Error: ', error);
});