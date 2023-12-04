function findNaughtyStep(original, modified) {

    const originalArray = original.split('');
    const modifiedArray = modified.split('');
    let steps = '';
    let countStepsAdd = 0;

    let i = 0; // index for originalArray
    let j = 0; // index for modifiedArray

    for (let i = 0; i < originalArray.length; i++) {

        let stepA = originalArray[i];
        let stepA1 = originalArray[i+1];
        let stepB = modifiedArray[j];
        let stepB1 = modifiedArray[j+1];
        
        // console.log(i, j, stepA, stepB, stepA1);

        if(stepB) {
            if(stepA !== stepB) {
                if(stepA1 === stepB) { // 
                    steps += originalArray[i];
                } else if(stepB1 === stepA) {
                    steps += modifiedArray[j];
                    i --;
                    j ++;
                    countStepsAdd ++;
                } else {
                    steps += modifiedArray[j];
                    countStepsAdd ++;
                    j ++; // Avanced cursor modifiedArray
                }
            } else {
                j ++; // Avanced cursor modifiedArray
            }

        } else {
            steps += originalArray[i];
            countStepsAdd ++;
        }
    }

    // console.log(steps);
    // console.log(j);
    // console.log(countStepsAdd);

    let isStepForAdd = (j + countStepsAdd) < modifiedArray.length;

    if (isStepForAdd) {
        steps += modifiedArray.slice(j + countStepsAdd).join('');
    }

    return steps;
}

function findNaughtyStep2(original, modified) {

    const stepsOriginal = original.split('');
    const stepsModified = modified.split('');
    let steps = '';
    let countStepsAdd = 0;

    for (let i = 0; i < stepsOriginal.length; i++) {

        let stepModified = stepsModified[i + countStepsAdd];
        let isStepAdded = stepsOriginal[i] !== stepsModified[i + countStepsAdd];

        let stepValidateA = stepsOriginal[i + 1 + countStepsAdd];
        let stepValidateB = stepsModified[i + countStepsAdd];
        let isStepDeleted = stepValidateA === stepValidateB;

        if (stepModified) {
            if (isStepAdded) {

                if (isStepDeleted) {
                    steps += stepsOriginal[i];
                    countStepsAdd--;
                } else {
                    steps += stepsModified[i + countStepsAdd];
                    countStepsAdd++;
                }

            }
        } else {
            countStepsAdd++;
            steps += stepsOriginal[i];
        }
    }

    let numStepsRecived = stepsOriginal.length + countStepsAdd;
    let isStepForAdd = (numStepsRecived) < stepsModified.length;

    if (isStepForAdd) {
        steps += stepsModified.slice(numStepsRecived).join('');
    }

    return steps;
}

module.exports = findNaughtyStep;