const oracledb = require('oracledb');
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;
oracledb.autoCommit = true;

const username = 'aleksa';
const password = 'Tehnikom12';

exports.connectToOracleDB = () => {
    const connection = oracledb.getConnection({
        user: username,
        password: password,
        connectString: "localhost/XE"
    });
    return connection;
}

exports.disconnectFromOracleDB = connection => {
    if (connection) {
        try {
            connection.close();
        } catch (err) {
            console.error(err);
        }
    }
}