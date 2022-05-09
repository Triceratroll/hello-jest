function sum(a, b) {
    return a + b;
}

function getSmallest(a, b) {
    if (a > b) {
        return b;
    } else {
        return a;
    }
}

module.exports = {
    sum,
    getSmallest
}