var express = require('express');
var router = express.Router();

// myscript.js
// This example uses Node 8's async/await syntax.
const oracledb = require('oracledb');
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;
const username = 'aleksa';
const password = 'Tehnikom12';

async function run() {
  let connection;
  try {
    connection = await oracledb.getConnection( {
      user: username,
      password: password,
      connectString: "localhost/XE"
    });

    const result = await connection.execute(
      `SELECT *
      FROM aleksa.country`,
    );
    console.log(result.rows);

  } catch (err) {
    console.error(err);
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
}

/* GET home page. */
router.get('/', function(req, res, next) {
  run();
  res.render('index', { title: 'Express' });
});

module.exports = router;
