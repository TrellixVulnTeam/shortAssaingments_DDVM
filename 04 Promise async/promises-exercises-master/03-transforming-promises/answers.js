/**
 *
 * EXERCISE 1
 *
 * @param {*} promise
 * @param {*} transformer
 * @returns {Promise}
 */
function mapPromise(promise, transformer) {
    return new Promise((resolve, reject) => {
        /* IMPLEMENT ME!! */
        promise
            .then((response) => transformer(response))
            .then((response2) => resolve(response2))
            .catch((error) => reject(error));
    });
}

/**
 *
 * EXERCISE 2
 *
 * @param {Promise<number | string>} numberPromise
 * @returns {Promise<number>}
 */
function squarePromise(numberPromise) {
    return numberPromise.then((res) => {
        return new Promise((resolve, reject) => {
            if (!isNaN(res)) {
                resolve(Math.pow(res, 2));
            } else if (typeof res === "string") {
                reject(`Cannot convert '${res}' to a number!`);
            }
        });
    });
}

/**
 * EXERCISE 3
 *
 * @param {Promise<number | string>} numberPromise
 * @returns {Promise<number>}
 */
function squarePromiseOrZero(promise) {
    return squarePromise(promise).catch(() => {
        return new Promise((resolve) => {
            resolve(0);
        });
    });
}

/**
 * EXERCISE 4
 *
 * @param {Promise} promise
 * @returns {Promise}
 */
function switcheroo(promise) {
    return promise.then(
        (res) => Promise.reject(res),
        (res1) => Promise.resolve(res1)
    );
}

/**
 * @callback consumer
 * @param {*} value
 */

/**
 * @callback handler
 * @param {*} error
 */

module.exports = {
    mapPromise,
    squarePromise,
    squarePromiseOrZero,
    switcheroo,
};
