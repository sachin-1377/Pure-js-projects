
// Simple Elevator Logic



import readlineSync from 'readline-sync'


let elevator = {
    currentFloor: 0,
    minFloor: -1,
    maxFloor: 10
};


// Move one floor up 
function up(elevator) {
    if (elevator.currentFloor != elevator.maxFloor) {
        elevator.currentFloor++;
    }
    return elevator.currentFloor;
}

// Move one floor down 
function down(elevator) {
    if (elevator.currentFloor != elevator.minFloor) {
        elevator.currentFloor--;
    }
    return elevator.currentFloor;
}

// Move to Ground
function ground(elevator) {
    elevator.currentFloor = 0;
    return elevator.currentFloor;
}

while (true) {


    // Simulate pressing a button
    let button = readlineSync.question("Press the valid Button: ");  // Change to "down" or "ground"

    if (button === "exit") {
        console.log("We are exiting the elevator......");
        break
    }

    let result;

    switch (button) {
        case "up":
            result = up(elevator);
            console.log("Elevator moved up to Floor:", result);
            break;

        case "down":
            result = down(elevator);
            console.log("Elevator moved down to Floor:", result);
            break;

        case "ground":
            result = ground(elevator);
            console.log("Elevator moved to Ground Floor:", result);
            break;

        default:
            console.log("Please press a proper button.");
    }

}