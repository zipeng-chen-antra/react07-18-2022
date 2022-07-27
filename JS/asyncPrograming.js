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


function getUserData(callback) {
    setTimeout(() => {
        const user = { id: 1, name: "patrick", age: 18, companyId: 111 }
        callback(user)
    }, 2000)
}

function getCompanyData(id, callback) {
    setTimeout(() => {
        const company = { companyId: 111, companyName: "Antra" }
        if (id === company.companyId) {
            callback(company)
        } else {
            callback({ error: "company Does not exist" })
        }
    }, 2000)
}

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




// const myPromise = new Promise((resolve, reject) => {
//     try {
//         console.log("promise is running")
//         resolve("hello")
//         // throw new Error(
//         //     "error"
//         // )
//     }
//     catch (err) {
//         reject("err")
//     }

// });

// myPromise
//     .then((data) => {
//         console.log("then is running", data)
//     })
//     .catch((err) => {
//         console.log(err)
//     })


function foo() {
    for (var i = 0; i < 3; i++) {
        setTimeout(() => {
            console.log(i)
        }, i * 1000)
    }
}

foo()