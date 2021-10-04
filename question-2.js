//this will resolve the promise using the resolve method for promise.
const resolvedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({'message':'resolved promise!'});
        },
        500);
    });
}
//this will do the exact opposite of the resolve method and reject the promise by using the reject promise method.
const rejectedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
                reject({'error':'rejected promise!'});
            },
            500);
    });
}

// These will call both the promises individually and then show the resolved and rejected outputs in the console.
// 'then' is for resolved promise and 'catch' is for rejected promise.
resolvedPromise().then(res => console.log(res))
rejectedPromise().catch(err => console.log(err))