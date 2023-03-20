console.log('****** Part Supply *******');
// REQUIRED FEATURES

// 1. Create a variable called 'partsNeeded' with a value of the number 40 
//    & console.log the variable
console.log('1. Number of partsNeeded:');
let partNeeded = 40;


// 2. Create a variable call 'supplyChanges' set it to an array containing
//    the following numbers: 3, 5, -6, 0, 7, 11
console.log('2. Array of supplyChanges:');
let supplyChanges = [3, 5, -6, 0, 7, 11]


// 4. The last item was added by mistake. Remove it from the 'supplyChanges' 
//    array & console.log the value removed.
console.log('4. Removed item:');
let removedItem = supplyChanges.pop()

// 5. A delivery of 25 more parts arrived. Add the value 25 to the end of the array
console.log('5. Adding 25 to supplyChanges.');
supplyChanges.push(25)

// 6. Write a `for` loop that shows each value in the 'supplyChanges' array
//    Use a console.log formatted as follows, where x is the value from the array
//    - if it is a positive number (greater than 0), log 'Added x parts.' 
//    - if the value is 0, log 'No Change.'
//    - if the value is negative, format the log as 'Removed x parts.' 

for (let x = 0; x < supplyChanges.length; x++) {
    console.log(supplyChanges[x]);
    if (supplyChanges[x] > 0) {
        console.log("Added x parts.");
    }
    if (supplyChanges[x] === 0) {
        console.log("No Change");
    }
    if (supplyChanges[x] < 0) {
        console.log("Removed x parts.");
    }
}

// STRETCH GOALS
console.log('---  Stretch Goals  ---');
// 7. Rewrite the `for` loop from #6 as a `for of` loop. 
console.log('7. Showing supplyChanges with "for of" loop');
let x = 0
for (each of supplyChanges) { 
    console.log(supplyChanges[x]); x++ };

// 8. Write a loop to determine the total number of parts available by
//    adding up all the numbers in the 'supplyChanges' array.
console.log('8. Total supplies available is:');

let sum = 0;
for (let x of supplyChanges) {
    sum = sum + x;
};

// 9. We have a large stash of parts in our warehouse that we 
//    need to box up and get ready for shipment. 
//    There are 572 parts in total, and each box holds 7 parts.
//    Use a `while` loop to keep adding parts to boxes until
//    no more boxes can be filled.
//    Then log how many boxes were filled, and how many parts are left over.
console.log('9. Filling boxes with a "while" loop');
let partsTotal = 572;
let maxBoxes = 7
let zero = []
while (partsTotal >= maxBoxes) {
    zero+=7
    if (partsTotal >= maxBoxes) {
        partsTotal -= maxBoxes
    }
}

//CONSOLE LOGS-----------------------------------------------------------

// Used for the partNeeded variable to log the number 
// of parts needed
console.log(partNeeded);

// Used for the supply changes variable to log the numbers
// in the supply 
console.log(supplyChanges);

// 3. Console log the value of the second item in the 'supplyChanges' array
console.log('3. Second supplyChange is:');
console.log(supplyChanges[1]);

// Used to log the removed item from the removedItem variable
// which takes in the pop command which removes the last item
console.log(removedItem)

// Used to log the pushed number 25 into the variable
// supply changes
console.log(supplyChanges);

// Used for the sum varibale to display the sum of 
// the supplyChanges variable
console.log(sum);

// Used to log the number of boxes filled and excess from 
// the partsTotal variable
console.log('this is the excess', partsTotal)
console.log('this is the boxes filled',zero.length);


