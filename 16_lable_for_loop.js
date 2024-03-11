outer: for (let i = 0; i < 3; i++) {

    for (let j = 0; j < 3; j++) {

        console.log(i, j);

        if (j == 1) {
            break outer; // break outer loop
        }
    }
}

console.log("hi");