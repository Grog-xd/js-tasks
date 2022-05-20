const array = [1, 2, 3, 5, 1, 6, 2, 5, 6, 7];

result = []

array.forEach(e => {
    !result.includes(e) ? result.push(e) : null
});
console.log(result);