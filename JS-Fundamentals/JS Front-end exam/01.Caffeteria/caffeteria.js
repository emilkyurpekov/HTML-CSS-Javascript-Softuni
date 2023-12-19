function manageCoffeeShop(input) {
    let n = parseInt(input.shift()); 
    let baristas = {};

    for (let i = 0; i < n; i++) {
        let details = input.shift().split(' ');
        let name = details[0];
        let shift = details[1];
        let drinks = details[2].split(',');
        baristas[name] = { name, shift, drinks };
    }

    let command = input.shift();
    while(command !== 'Closed') {
        let parts = command.split(' / ');
        let action = parts[0];
        let name = parts[1];

        switch (action) {
            case 'Prepare':
                let shift = parts[2];
                let coffeeType = parts[3];
                if (baristas[name] && baristas[name].shift === shift && baristas[name].drinks.includes(coffeeType)) {
                    console.log(`${name} has prepared a ${coffeeType} for you!`);
                } else {
                    console.log(`${name} is not available to prepare a ${coffeeType}.`);
                }
                break;
            case 'Change Shift':
                if (baristas[name]) {
                    baristas[name].shift = parts[2];
                    console.log(`${name} has updated his shift to: ${parts[2]}`);
                }
                break;
            case 'Learn':
                if (baristas[name] && !baristas[name].drinks.includes(parts[2])) {
                    baristas[name].drinks.push(parts[2]);
                    console.log(`${name} has learned a new coffee type: ${parts[2]}.`);
                } else if (baristas[name]) {
                    console.log(`${name} knows how to make ${parts[2]}.`);
                }
                break;
        }

        command = input.shift();
    }


    let baristasSorted = Object.values(baristas).sort((a, b) => a.name.localeCompare(b.name));

    baristasSorted.forEach(barista => {
        console.log(`Barista: ${barista.name}, Shift: ${barista.shift}, Drinks: ${barista.drinks.join(', ')}`);
    });
}