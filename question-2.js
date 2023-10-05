function resolvedPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise resolved successfully!");
        }, 500);
    });
}

function rejectedPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error("Promise rejected with an error!"));
        }, 500);
    });
}

resolvedPromise()
    .then((result) => {
        console.log("Resolved Promise Result:", result);
    })
    .catch((error) => {
        console.error("Resolved Promise Error:", error);
    });

rejectedPromise()
    .then((result) => {
        console.log("Rejected Promise Result:", result);
    })
    .catch((error) => {
        console.error("Rejected Promise Error:", error.message);
    });
