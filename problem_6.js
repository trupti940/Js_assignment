// Custom Array Methods

function customSplice(arr, start, deleteCount, ...items) {
    let removedElements = [];
    let newArr = [];

    for (let i = 0; i < start; i++) {
        newArr.push(arr[i]);
    }

    for (let i = start; i < start + deleteCount; i++) {
        removedElements.push(arr[i]);
    }

    newArr = newArr.concat(items);

    for (let i = start + deleteCount; i < arr.length; i++) {
        newArr.push(arr[i]);
    }

    while (arr.length) {
        arr.pop();
    }

    for (let i = 0; i < newArr.length; i++) {
        arr.push(newArr[i]);
    }

    return removedElements;
}

function customSlice(arr, start, end) {
    let result = [];
    start = start || 0;
    end = end || arr.length;

    if (start < 0) {
        start = arr.length + start;
    }
    if (end < 0) {
        end = arr.length + end;
    }

    for (let i = start; i < end; i++) {
        result.push(arr[i]);
    }

    return result;
}

function customIncludes(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return true;
        }
    }
    return false;
}

function customPush(arr, ...items) {
    for (let i = 0; i < items.length; i++) {
        arr[arr.length] = items[i];
    }
    return arr.length;
}

function customPop(arr) {
    if (arr.length === 0) {
        return undefined;
    }
    let lastElement = arr[arr.length - 1];
    arr.length = arr.length - 1;
    return lastElement;
}

// Custom String Methods

function customToLowerCase(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        let charCode = str.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
            result += String.fromCharCode(charCode + 32);
        } else {
            result += str[i];
        }
    }
    return result;
}

function customToUpperCase(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        let charCode = str.charCodeAt(i);
        if (charCode >= 97 && charCode <= 122) {
            result += String.fromCharCode(charCode - 32);
        } else {
            result += str[i];
        }
    }
    return result;
}

// Example Usage

let arr1 = [1, 2, 3, 4, 5];
console.log(customSplice(arr1, 2, 2, 'a', 'b')); // Output: [3, 4]
console.log(arr1); // Output: [1, 2, 'a', 'b', 5]

let arr2 = [1, 2, 3, 4, 5];
console.log(customSlice(arr2, 1, 3)); // Output: [2, 3]

let arr3 = [1, 2, 3, 4, 5];
console.log(customIncludes(arr3, 3)); // Output: true
console.log(customIncludes(arr3, 6)); // Output: false

let arr4 = [1, 2, 3];
console.log(customPush(arr4, 4, 5)); // Output: 5
console.log(arr4); // Output: [1, 2, 3, 4, 5]

let arr5 = [1, 2, 3, 4, 5];
console.log(customPop(arr5)); // Output: 5
console.log(arr5); // Output: [1, 2, 3, 4]

console.log(customToLowerCase('Hello World!')); // Output: 'hello world!'
console.log(customToUpperCase('Hello World!')); // Output: 'HELLO WORLD!'
