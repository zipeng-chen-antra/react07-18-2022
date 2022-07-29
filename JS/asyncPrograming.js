// JS single thread | event loop (call stack | Async API(libuv) | message queue)
// JS scope:  function | block
// JS closure: inner function can access outer function scope
// let counter = 0;

// // function foo() {
// //     while (counter < 1000) {
// //         console.log(counter)
// //         counter++;
// //     }
// // }
// // foo()

// function changeCounterAfterRandomTime(callbackFn) {
//     let timer = Math.floor(Math.random() * 5)
//     console.log(`after ${timer}s:`)
//     setTimeout(() => {
//         counter = 1000;
//         callbackFn(counter)
//     }, timer * 1000)
// }
// changeCounterAfterRandomTime(AddOne);
// changeCounterAfterRandomTime((data) => {
//     message(`new counter is ${data}`)
// });





// function message(msg) {
//     console.log(msg)
// }


// function AddOne(num) {
//     console.log('Add ONe', num + 1)
// }



// // while (counter < 100) {
// //     counter++;
// //     console.log(counter)
// // }
// console.log("final", counter)


// function getUserData(callback) {
//     setTimeout(() => {
//         const user = { id: 1, name: "patrick", age: 18, companyId: 111 }
//         callback(user)
//     }, 2000)
// }

// function getCompanyData(id, callback) {
//     setTimeout(() => {
//         const company = { companyId: 111, companyName: "Antra" }
//         if (id === company.companyId) {
//             callback(company)
//         } else {
//             callback({ error: "company Does not exist" })
//         }
//     }, 2000)
// }

// getUserData((user) => {
//     console.log("getUserData", user)
//     getCompanyData(user.companyId, (company) => {
//         console.log("getCompanyData", company)
//         getUserData((user) => {
//             console.log("getUserData", user)
//             getCompanyData(user.companyId, (company) => {
//                 console.log("getCompanyData", company)
//             })
//         })
//     })
// })


// function foo() {
//     setTimeout(() => {
//         return 5;
//     }, 2000)
// }

// const a = foo()
// console.log(a) //5 undefined

// setTimeout(() => {
//     console.log(a) //5 undefined
// }, 3000)


function getUserDataWithPromise() {
    return new MyPromise((res, rej) => {
        setTimeout(() => {
            const user = { id: 1, name: "patrick", age: 18, companyId: 111 }
            res(user)
        }, 2000)
    })
}
function getCompanyDataWithPromise(id) {
    return new MyPromise((res, rej) => {
        setTimeout(() => {
            const company = { companyId: 111, companyName: "Antra" }
            if (id === company.companyId) {
                res(company)
            } else {
                rej({ error: "company Does not exist" })
            }
        }, 2000)
    })
}

// getUserDataWithPromise()
//     .then((data) => {
//         console.log("user", data)
//         return getCompanyDataWithPromise(data.companyId)
//     }).then(data => {
//         console.log("compnay", data)
//         return getUserDataWithPromise();
//     }).then((data) => {
//         console.log("user", data)
//         return getUserDataWithPromise()
//     }).then((data) => {
//         console.log("user", data)
//         return getUserDataWithPromise()
//     })


class MyPromise {
    constructor(excutionFn) {
        this.state = "PENDING"

        const resolve = (value) => {
            this.value = value;
            this.state = "FULFIlLL";
            console.log('resolve is working')
            if (this.onFulfillmentFn) {
                this.onFulfillmentFn(this.value)
            }

        }
        const reject = (value) => {
            this.state = "REJECT"
            console.log('reject is working')
            this.value = value;
            if (this.onRejected) {
                this.onRejected(this.value)
            }

        }

        excutionFn(resolve, reject)
    }
    then(onFulfillmentFn, onRejected) {
        let state = this.state;
        let value = this.value;
        return new MyPromise((res, rej) => {
            setTimeout(() => {
                if (state === "FULFIlLL") {
                    let result = onFulfillmentFn(value);
                    res(result)
                } else if (state === "REJECT") {
                    let result = onRejected(value);
                    rej(result)
                }


                else {
                    if (onFulfillmentFn) {
                        this.onFulfillmentFn = (value) => {
                            let result = onFulfillmentFn(value);
                            res(result)
                        }
                    }
                    if (onRejected) {
                        this.onRejected = (value) => {
                            let result = onRejected(value);
                            rej(result)
                        }
                    }

                }

            })
        })
    }
    catch() {

    }
}



const myPromise = new Promise((resolve, reject) => {
    try {
        console.log("promise is running")
        setTimeout(() => {
            try {
                //throw new Error('ERROR')
                resolve({ msg: "resolve data after 2s" })
            } catch (err) {
                reject("err")
            }
        }, 2000)
    }
    catch (err) {
        reject("err")
    }
});


myPromise
    .then((data) => {
        console.log("then is running", data)
        return new Promise((res, rej) => {
            res(6)
        })
    }, (err) => {
        console.warn(err)
    }).then((data2) => {
        console.log("then2 is running", data2)
    })

// console.log("hello")
// .catch((err) => {
//     console.log(err)
// })


// function foo() {
//     // 1. var will hoist to the top of the function scope
//     for (var i = 0; i < 3; i++) {
//         (function (input) {
//             setTimeout(() => {
//                 console.log(input)
//             }, input * 1000)
//         })(i)
//     }
// }
// foo()

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(json => console.log(json))