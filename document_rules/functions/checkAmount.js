module.exports = targetVal => {
    if (targetVal < 0) {
        return [
            {
                message: targetVal + " can't be negative",
            },
        ];
    }
};