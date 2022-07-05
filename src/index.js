module.exports = function reverse (n) {    
    const reverseInt = n.toString().split('').reverse().join('');
    return (+parseInt(reverseInt));
}
