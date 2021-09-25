module.exports = function mathTable(value) {
    const num = Math.abs(value);
    if (!Number.isInteger(num)) {
        throw new Error('expected an integer');
    }
    for ( let i = 1; i<=10; i++ ) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
};