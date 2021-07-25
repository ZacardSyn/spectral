module.exports = targetVal => {
    if (targetVal.length !== 3) {
        return [
            {
                message: targetVal + " does not fit the standard",
            },
        ];
    }
};