//Databases
const oracle_db = require('../db/oracle_db');


/* METHODS FOR COUNTRY ROUTES */

// FIND ALL counties
exports.findAllCountries = async() => {
    let connection;
    try {
        connection = await oracle_db.connectToOracleDB();
        const sql = `SELECT * FROM aleksa.country ORDER BY id ASC`;
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
    } finally {
        oracle_db.disconnectFromOracleDB(connection);
    }
}

// FIND county by id
exports.findAllCountryById = async(country_id) => {
    let connection;
    try {
        connection = await oracle_db.connectToOracleDB();
        const sql = `SELECT * FROM aleksa.country WHERE id=${country_id} ORDER BY id ASC`;
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
        const sql = `SELECT * FROM aleksa.country WHERE name=${country_name} ORDER BY id ASC`;
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

// INSERT county
exports.insertCountry = async(country_name) => {
    let connection;
    try {
        connection = await oracle_db.connectToOracleDB();
        country_id = await getMaxCountryId(connection) + 1;
        const sql = `INSERT INTO aleksa.country VALUES (${country_id}, '${country_name}')`;
        const result = await connection.execute(sql);
        return result;
    } catch (err) {
        return {
            'error': {
                type: 'error',
                message: `Can't insert country!`,
                error: err
            }
        }
    } finally {
        oracle_db.disconnectFromOracleDB(connection);
    }
}

// UPDATE county
exports.updateCountry = async(country_name, new_country_name) => {
    let connection;
    try {
        connection = await oracle_db.connectToOracleDB();
        const sql = `UPDATE aleksa.country SET name = '${new_country_name}' WHERE name='${country_name}'`;
        const result = await connection.execute(sql);
        return result;
    } catch (err) {
        return {
            'error': {
                type: 'error',
                message: `Can't update country with that country name!`,
                error: err
            }
        }
    } finally {
        oracle_db.disconnectFromOracleDB(connection);
    }
}

// DELETE county
exports.deleteCountry = async(country_id) => {
    let connection;
    try {
        connection = await oracle_db.connectToOracleDB();
        const sql = `DELETE FROM aleksa.country WHERE id='${country_id}'`;
        const result = await connection.execute(sql);
        return result;
    } catch (err) {
        return {
            'error': {
                type: 'error',
                message: `Can't delete country!`,
                error: err
            }
        }
    } finally {
        oracle_db.disconnectFromOracleDB(connection);
    }
}

getMaxCountryId = async(connection) => {
    const sql = `SELECT MAX(id) as max_id FROM aleksa.country`;
    const results = await connection.execute(sql);
    const max_id = results.rows[0]['MAX_ID'];
    return max_id;
}