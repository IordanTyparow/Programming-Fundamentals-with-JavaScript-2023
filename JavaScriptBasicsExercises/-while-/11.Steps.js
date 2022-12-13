function steps(input) {

    let totalSteps = 10000;

    let stepSum = 0;

    let index = 0;
    let command = input[index];

    while (command !== "Going home") {
        let steps = Number(command);
        stepSum += steps;

        if (stepSum >= totalSteps) {
            console.log(`Goal reached! Good job!`);
            console.log(`${stepSum - totalSteps} steps over the goal!`);
            break;
        }

        index++;
        command = input[index];
    }

    if (command === "Going home") {
        let stepsToHome = Number(input[index + 1]);
        stepSum += stepsToHome;

        if (stepSum >= totalSteps) {
            console.log(`Goal reached! Good job!`);
            console.log(`${stepSum - totalSteps} steps over the goal!`);
        } else {
            console.log(`${totalSteps - stepSum} more steps to reach goal.`);
        }
    }

}
steps(["1500",
    "300",
    "2500",
    "3000",
    "Going home",
    "200"])


