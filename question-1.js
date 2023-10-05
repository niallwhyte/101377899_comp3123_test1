function lowerCaseWords(arr) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(arr)) {
            reject("Input is not an array");
            return;
        }

        const filteredWords = arr.filter(item => typeof item === 'string');
        const lowercasedWords = filteredWords.map(word => word.toLowerCase());

        if (lowercasedWords.length > 0) {
            resolve(lowercasedWords);
        } else {
            reject("No lowercase words found in the input array");
        }
    });
}


const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];
lowerCaseWords(mixedArray)
    .then(result => {
        console.log("Lowercased words:", result);
    })
    .catch(error => {
        console.error("Error:", error);
    });



