module.exports = (arr, key) => {
    if (key === arr[0]) return 0;
    let lowIndex = 0;
    let highIndex = arr.length - 1;
    let midIndex;
    while (lowIndex < highIndex) {
        midIndex = Math.ceil((highIndex + lowIndex) / 2);
        if (key > arr[midIndex] && lowIndex !== midIndex) lowIndex = midIndex;
        else if (key > arr[midIndex]) return -1;
        if (key < arr[midIndex] && highIndex !== midIndex) highIndex = midIndex;
        else if (key < arr[midIndex]) return -1;
        if (key === arr[midIndex]) return midIndex;
    }
    return -1;
}