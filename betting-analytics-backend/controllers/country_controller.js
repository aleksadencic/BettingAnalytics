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
        return {
            'error': {
                type: 'error',
                message: `Can't get countries!`,
                error: err
            }
        }
        s
    } finally {
        oracle_db.disconnectFromOracleDB(connection);
    }
}

// FIND county by id
exports.findAllCountryById = async(country_id) => {
    let connection;
    try {
        connection = await oracle_db.connectToOracleDB();
        const sql = `SELECT * FROM aleksa.country WHERE id=${country_id}`;
        const countries = await connection.execute(sql);
        return countries.rows;
    } catch (err) {
        return {
            'error': {
                type: 'error',
                message: `Can't get country by id!`,
                error: err
            }
        }
    } finally {
        oracle_db.disconnectFromOracleDB(connection);
    }
}

// FIND county by name
exports.findAllCountryByName = async(country_name) => {
    let connection;
    try {
        connection = await oracle_db.connectToOracleDB();
        const sql = `SELECT * FROM aleksa.country WHERE name=${country_name}`;
        const countries = await connection.execute(sql);
        return countries.rows;
    } catch (err) {
        return {
            'error': {
                type: 'error',
                message: `Can't get country by name!`,
                error: err
            }
        }
    } finally {
        oracle_db.disconnectFromOracleDB(connection);
    }
}