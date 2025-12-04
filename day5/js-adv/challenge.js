function organizeNum(arr) {
    return arr.reduce((acc, x) => {
        acc[x % 2 === 0 ? 'even' : 'odd'].push(x);
        return acc;
    }, { odd: [], even: [] });
}

console.log(organizeNum([1, 2, 3, 4, 5]));
