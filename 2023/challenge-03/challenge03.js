function findNaughtyStep(original, modified) {

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