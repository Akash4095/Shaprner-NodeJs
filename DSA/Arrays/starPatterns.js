function printPattern(rows) {
    for (let i = rows; i >= 1; i--) {
        let pattern = '';

        for (let j = 1; j <= i; j++) {
            pattern += '*';
        }

        console.log(pattern);
    }
}
printPattern(5)
// *****
// ****
// ***
// **
// *

function printPatternWhile(rows) {
    let i = rows;

    while (i >= 1) {
        let j = 1;
        let pattern = '';

        while (j <= i) {
            pattern += '*';
            j++;
        }

        console.log(pattern);
        i--;
    }
}

function printPattern(rows) {

    for (let i = rows - 1; i >= 1; i--) {
        let pattern = '';

        for (let j = 1; j <= i; j++) {
            pattern += '*';
        }

        console.log(pattern);
    }

    for (let i = 1; i <= rows; i++) {
        let pattern = '';

        for (let j = 1; j <= i; j++) {
            pattern += '*';
        }

        console.log(pattern);
    }
}

// *****
// ****
// ***
// **
// *
// *
// **
// ***
// ****
// *****


function printPatternTwo(rows) {
    for (let i = 1; i <= rows; i++) {
        let pattern = '';

        // Print asterisks
        for (let j = 1; j <= i; j++) {
            pattern += '*';
        }

        // Print spaces
        for (let k = i; k < rows; k++) {
            pattern += ' ';
        }

        // Print second set of asterisks
        for (let l = i; l > 0; l--) {
            pattern += '*';
        }

        console.log(pattern);
    }
}

// *     *
// **    **
// ***   ***
// ****  ****
// ***** *****