function hanoiIterative(n, p1, p2, p3) {
    // Total number of moves
    let totalMoves = Math.pow(2, n) - 1;

    // Using these variables to represent the pegs
    let source = p1;
    let target = p3;
    let auxiliary = p2;

    // If the number of disks is even, swap target and auxiliary
    if (n % 2 === 0) {
        [target, auxiliary] = [auxiliary, target];
    }

    for (let i = 1; i <= totalMoves; i++) {
        if (i % 3 === 1) {
            // Move disk from source to target
            console.log(i+"Move disk from " + source + " to " + target);
        } else if (i % 3 === 2) {
            // Move disk from source to auxiliary
            console.log(i+"Move disk from " + source + " to " + auxiliary);
        } else if (i % 3 === 0) {
            // Move disk from auxiliary to target
            console.log(i+"Move disk from " + auxiliary + " to " + target);
        }
    }
}

// Example usage:
hanoiIterative(2, "P1", "P2", "P3");