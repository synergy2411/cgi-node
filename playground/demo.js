
const arr = [3,4,5];
// spread - unpacks the collection
const newArr = [1,2,...arr, 6,7];
console.log(newArr);        // [1,2,3,4,5,6,7]


const newArr = [1,2,arr, 6,7];
console.log(newArr);           // [1,2,[3,4,5],6,7]


const items =[];            // x12345
const newItems =[];         // x98765

// reference type assignment
items = newItems;
    // items ref = x98765

// immutable principle
items = [...newItem];
