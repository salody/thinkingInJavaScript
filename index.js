const randoms = {
    [Symbol.iterator]: function () {
        return {
            next: function () {
                return {
                    value: Math.random(),
                    done: false
                }
            }
        }
    }
};

const randomPool = [];

for (let i of randoms) {
    if (randomPool.length >= 100) break;
    randomPool.push(i);
}

console.log(randomPool);
console.log(randomPool.length);
