function PrintTriangleStars(rows) {
    for (let i = rows; i >= 1; i--) {
        let pattern = "\n";
        for (let j = 1; j <= i; j++) {
            pattern += "*";
        }
        console.log(pattern);
    }
}
PrintTriangleStars(5)

