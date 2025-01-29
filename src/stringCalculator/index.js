function add(numbers) {
    if (!numbers) return 0;

    let [delim, nums] = numbers.startsWith("//") ? [new RegExp(numbers[2]), numbers.split("\n")[1]] : [/[,\n]/, numbers];
    let numArray = nums.split(delim).map(Number);
    let negatives = numArray.filter(n => n < 0);
    if (negatives.length) throw new Error(`negatives not allowed: ${negatives.join(", ")}`);

    return numArray.reduce((sum, num) => sum + num, 0);
}



module.exports = add;
