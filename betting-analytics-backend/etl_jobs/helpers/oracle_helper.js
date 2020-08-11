const oracle_db = require('../../db/oracle_db');

// Members ETL
exports.getMembersDataFromOracleDB = async(req, res, next) => {
    let connection;
    try {
        connection = await oracle_db.connectToOracleDB();
        const sql = `SELECT * FROM country ORDER BY country_id ASC`;
        const members = await connection.execute(sql);
        return members.rows;
    } catch (err) {
        return {
            'error': {
                type: 'error',
                message: `Can't find members for member ETL process!`,
                error: err
            }
        }
    } finally {
        oracle_db.disconnectFromOracleDB(connection);
    }
}