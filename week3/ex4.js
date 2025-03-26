function hotelCost(nights) {
    const costPerNight = 140;
    return nights * costPerNight;
}

function planeRideCost(destination) {
    if (destination === "London") {
        return 183;
    } else if (destination === "Paris") {
        return 220;
    } else {
        return 300;
    }
}

function rentalCarCost(days) {
    const costPerDay = 40;
    let totalCost = days * costPerDay;
    if (days > 10) {
        totalCost *= 0.95;
    }
    return totalCost;
}

function totalVacationCost() {
    let nights = parseInt(prompt("How many nights would you like to stay at the hotel?"));
    while (isNaN(nights) || nights <= 0) {
        nights = parseInt(prompt("Please enter a valid number of nights"));
    }

    let destination = prompt("Where would you like to go? (London, Paris, or other)");
    while (destination === "" || !isNaN(destination)) {
        destination = prompt("Please enter a valid destination (London, Paris, or other)");
    }

    let rentalDays = parseInt(prompt("How many days would you like to rent the car?"));
    while (isNaN(rentalDays) || rentalDays <= 0) {
        rentalDays = parseInt(prompt("Please enter a valid number of rental days"));
    }

    const hotelCostTotal = hotelCost(nights);
    const planeTicketCost = planeRideCost(destination);
    const rentalCarCostTotal = rentalCarCost(rentalDays);

    const totalCost = hotelCostTotal + planeTicketCost + rentalCarCostTotal;
    
    console.log(`The car rental cost: $${rentalCarCostTotal}`);
    console.log(`The hotel cost: $${hotelCostTotal}`);
    console.log(`The plane ticket cost: $${planeTicketCost}`);
    console.log(`Total vacation cost: $${totalCost}`);
}

totalVacationCost();
