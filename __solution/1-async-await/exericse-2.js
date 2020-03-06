// Exercise 2
// ----------

// 2.1
const doubleLater = (num) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(num * 2);
        }, 3000);
    });
}

// 2.2
const addPromise = async (num) => {

    const a = await doubleLater(10);
    const b = await doubleLater(20);
    const c = await doubleLater(30);

    return (num + a + b + c);
}

addPromise(10).then((sum) => {
    console.log(sum);
});