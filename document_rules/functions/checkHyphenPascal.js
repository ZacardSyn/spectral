module.exports = targetVal => {
    const regex = new RegExp("^([A-Z][a-z0-9]*)(-[A-Z0-9][A-Za-z0-9]+)*$");
    var test = regex.test(targetVal);
    if (test === false) {
        return [
            {
                message: targetVal + " is not in hyphenated pascal case ",
            },
        ];
    }
};