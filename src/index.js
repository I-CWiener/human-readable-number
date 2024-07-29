module.exports = function toReadable(x) {
    const arr = [
        "",
        "one ",
        "two ",
        "three ",
        "four ",
        "five ",
        "six ",
        "seven ",
        "eight ",
        "nine ",
        "ten ",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const arr2 = [
        "",
        "",
        "twenty ",
        "thirty ",
        "forty ",
        "fifty ",
        "sixty ",
        "seventy ",
        "eighty ",
        "ninety ",
    ];
    const hundred = "hundred ";

    if (x === 0) {
        console.log("zero");
        return "zero";
    } else if (x > 99 && x < 1000) {
        let hunds = Math.floor(x / 100);
        let tens = Math.floor((x - hunds * 100) / 10);
        let units = x - (hunds * 100 + tens * 10);

        if (tens < 2) {
            console.log(
                `${arr[hunds]}${hundred}${arr[x - hunds * 100]}`.trim()
            );
            return `${arr[hunds]}${hundred}${arr[x - hunds * 100]}`.trim();
        } else if (tens >= 2) {
            console.log(
                `${arr[hunds]}${hundred}${arr2[tens]}${arr[units]}`.trim()
            );
            return `${arr[hunds]}${hundred}${arr2[tens]}${arr[units]}`.trim();
        }
    } else if (x >= 20 && x < 100) {
        let tens = Math.floor(x / 10);
        let units = x - tens * 10;
        console.log(`${arr2[tens]}${arr[units]}`.trim());
        return `${arr2[tens]}${arr[units]}`.trim();
    } else {
        console.log(arr[x].trim());
        return arr[x].trim();
    }
};

//export default toReadable;
