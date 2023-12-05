function motoGPRace(input) {
    const n = parseInt(input[0]);
    const riders = input.slice(1, n + 1).map(line => {
        const [name, fuel, position] = line.split('|');
        return { name, fuel: parseInt(fuel), position: parseInt(position) };
    });

    for (let i = n + 1; i < input.length; i++) {
        if (input[i] === "Finish") break;

        const [command, ...args] = input[i].split(" - ");
        
        switch (command) {
            case "StopForFuel":
                handleStopForFuel(args, riders);
                break;
            case "Overtaking":
                handleOvertaking(args, riders);
                break;
            case "EngineFail":
                handleEngineFail(args, riders);
                break;
        }
    }

    // Output results
    riders.sort((a, b) => a.position - b.position);
    riders.forEach(rider => {
        console.log(`${rider.name}\n  Final position: ${rider.position}`);
    });
    function handleStopForFuel([rider, minFuel, changedPosition], riders) {
        const riderObj = riders.find(r => r.name === rider);
        if (riderObj.fuel < parseInt(minFuel)) {
            riderObj.position = parseInt(changedPosition);
            console.log(`${rider} stopped to refuel but lost his position, now he is ${changedPosition}.`);
        } else {
            console.log(`${rider} does not need to stop for fuel!`);
        }
    }
    
    function handleOvertaking([rider1, rider2], riders) {
        const index1 = riders.findIndex(r => r.name === rider1);
        const index2 = riders.findIndex(r => r.name === rider2);
    
        if (riders[index1].position < riders[index2].position) {
            [riders[index1].position, riders[index2].position] = [riders[index2].position, riders[index1].position];
            console.log(`${rider1} overtook ${rider2}!`);
        }
    }
    
    function handleEngineFail([rider, lapsLeft], riders) {
        const index = riders.findIndex(r => r.name === rider);
        riders.splice(index, 1);
        console.log(`${rider} is out of the race because of a technical issue, ${lapsLeft} laps before the finish.`);
    } 
}

