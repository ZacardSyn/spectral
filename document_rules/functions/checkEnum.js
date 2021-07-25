module.exports = targetVal => {
    const regex = new RegExp("\\b[A-Z]+(_[A-Z]+)*\\b");
    for (let i of targetVal) {
        var test = regex.test(i);
        if (test === false) {
            return [
                {
                    message: targetVal + " is not in UPPER_SNAKE_CASE ",
                },
            ];
        }
    }
};