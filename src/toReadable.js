const toReadable = (x) => {
    const arr = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
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
        "twenty",
        "thitry",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    const hundred = "hundred";
    const thousand = "thousand";
    const million = "million";
    const billion = "billion";

    if (x === 0) {
        console.log("zero");
        return "zero";
    } else if (x > 999 && x <= 19999) {
        let thous = Math.floor(x / 1000);
        let hunds = Math.floor((x - thous * 1000) / 100);
        let tens = Math.floor((x - (thous * 1000 + hunds * 100)) / 10);
        let units = x - (thous * 1000 + hunds * 100 + tens * 10);

        if (hunds === 0) {
            console.log(
                `${arr[thous]} ${thousand} ${arr2[tens]} ${arr[units]}`
            );
            return `${arr[thous]} ${thousand} ${arr2[tens]} ${arr[units]}`;
        } else {
            console.log(
                `${arr[thous]} ${thousand} ${arr[hunds]} ${hundred} ${arr2[tens]} ${arr[units]}`
            );
            return `${arr[thous]} ${thousand} ${arr[hunds]} ${hundred} ${arr2[tens]} ${arr[units]}`;
        }
    }

    if (x > 99 && x < 1000) {
        let hunds = Math.floor(x / 100);
        let tens = Math.floor((x - hunds * 100) / 10);
        let units = x - (hunds * 100 + tens * 10);
        console.log(`${arr[hunds]} ${hundred} ${arr2[tens]} ${arr[units]}`);
        return `${arr[hunds]} ${hundred} ${arr2[tens]} ${arr[units]}`;
    } else if (x >= 20 && x < 100) {
        let tens = Math.floor(x / 10);
        let units = x - tens * 10;
        console.log(`${arr2[tens]} ${arr[units]}`);
        return `${arr2[tens]} ${arr[units]}`;
    } else {
        console.log(arr[x]);
        return arr[x];
    }
};

export default toReadable;
