// this would define the arrow fuction which is called lowerCaseWords
// will take mixedArray as an input parameter array
const lowerCaseWords = (mixedArray) => {

// this will check if mixedArray is a valid array
// then it will filter out non-string methods (by using the E6 method) while filter() will run on each of the elements of mixedArray
    return new Promise((resolve, reject) => {
        if (mixedArray.length >= 0 && Array.isArray(mixedArray)) {
            const filteredArrayHavingOnlyStr = mixedArray.filter((eachE10fArr) =>
                typeof eachE10fArr === "string");
            // this will map the returned filtered out values to an array which has lowerCase string (using E6 method like before)
            // then map() will run on each of the elements of mixedArray after which toLowerCase will convert the string to lowercase
            const mappedArrayOfLowerCaseStrings = filteredArrayHavingOnlyStr.map((eachItemOfFilterArr) =>
                eachItemOfFilterArr.toLowerCase()
            );
            // resolve using the lower case string and if not reject it using the promise with a message
            resolve(mappedArrayOfLowerCaseStrings);
        }
        else{
            reject("Invalid array");
        }
    });
};

// First have to define the mixedArray and then call the lowerCase funtion so it prints: ['pizza', 'wings']
const mixedArray = ["PIZZA", 10, true, 25, false, "Wings"];

lowerCaseWords(mixedArray).
then((value) =>
// this will print the array values when the promise is resolved
        console.log(value)
)
    .catch((error) =>
// this will print the error if the promise is rejected
            console.log(error)
    );