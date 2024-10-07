// prompt user max limit 
let maxLimit = parseInt(prompt("Enter the Limit of the Double Loop:"));

// initialize counter
let outerCounter = 0;
let innerCounter = 0;

//  specified limits
for (outerCounter = 0; outerCounter <= maxLimit; outerCounter++) {
    for (innerCounter = 0; innerCounter <= maxLimit; innerCounter++) {
        let addedValue = outerCounter + innerCounter;
        console.log(`[${outerCounter}] [${innerCounter}] Added value is ${addedValue}`);
    }
     
