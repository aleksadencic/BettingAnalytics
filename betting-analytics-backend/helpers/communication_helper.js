exports.sendResults = (results, res) => {
    if (results.hasOwnProperty('error')) {
        res.status(500).json(results.error);
    } else {
        res.json(results);
    }
}

exports.getParameters = (parameters) => {
    const params = [];
    Object.entries(parameters).forEach(parameter => {
        params.push({
            key: parameter[0],
            value: parameter[1]
        })
    });
    return params;
}