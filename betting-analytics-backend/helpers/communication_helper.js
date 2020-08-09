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

exports.sendResponse = (results, res) => {
    if (results && results.hasOwnProperty('error')) {
        res.status(500).json(results.error);
    } else {
        res.json(results);
    }
}

exports.getMaxCountryId = async(connection, id_column_name, table) => {
    const sql = `SELECT MAX(${id_column_name}) as max_id FROM ${table}`;
    const results = await connection.execute(sql);
    const max_id = results.rows[0]['MAX_ID'];
    return max_id;
}