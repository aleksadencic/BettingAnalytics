exports.sendResults = (results, res) => {
    if (results.hasOwnProperty('error')) {
        res.status(500).json(results.error);
    } else {
        res.json(results);
    }
}