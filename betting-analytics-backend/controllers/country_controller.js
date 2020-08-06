//Databases
const oracle_db = require('../db/oracle_db');


/* METHODS FOR COUNTRY ROUTES */

// FIND ALL counties
exports.findAllCountries = async() => {
    let connection;
    try {
        connection = await oracle_db.connectToOracleDB();
        const sql = `SELECT * FROM aleksa.country`;
        const countries = await connection.execute(sql);
        return countries.rows;
    } catch (err) {
        res.status(500).json({
            type: 'error',
            message: `Can't find all countries!`,
            error: err
        });
    } finally {
        oracle_db.disconnectFromOracleDB(connection);
    }
}