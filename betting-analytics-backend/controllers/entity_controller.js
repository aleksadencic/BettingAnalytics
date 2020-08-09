const express = require('express');
const oracle_db = require('../db/oracle_db');

/* EXAMPLE */
// exports.find = async(table, columns = '*') => {
//     let connection;
//     try {
//         connection = await oracle_db.connectToOracleDB();
//         const sql = `SELECT ${columns} FROM ${table} ORDER BY id ASC`;
//         const results = await connection.execute(sql);
//         return results.rows;
//     } catch (err) {
//         return {
//             'error': {
//                 type: 'error',
//                 message: `Can't get all rows from table ${table}!`,
//                 error: err
//             }
//         }
//     } finally {
//         oracle_db.disconnectFromOracleDB(connection);
//     }
// }

/* FIND */
exports.find = async({ parameters } = {}) => {
    let connection;
    try {
        connection = await oracle_db.connectToOracleDB();
        let columns = '';
        let table = '';
        let join = null;
        let conditions = null;
        let operator = 'AND';
        let group = null;
        let having = null;
        let having_operator = 'AND';
        let sort = null;
        let sortingConditions = '';

        let sql = `SELECT`;

        parameters.filter(parameter => {
            if (parameter.key === 'columns') columns = parameter.value;
            if (parameter.key === 'table') table = parameter.value;
            if (parameter.key === 'conditions') conditions = parameter.value;
            if (parameter.key === 'join') join = parameter.value;
            if (parameter.key === 'groupBy') group = parameter.value;
            if (parameter.key === 'sort') sort = parameter.value;
            if (parameter.key === 'operator') operator = parameter.value;
            if (parameter.key === 'having') having = parameter.value;
            if (parameter.key === 'havingOperator') having_operator = parameter.value;
        });
        if (columns !== '') {
            columns = columns.replace("[", "").replace("]", "")
            sql += ' ' + columns;
        } else {
            if (join) {
                params = join.replace("[", "")
                    .replace("]", "")
                    .replace("{", "")
                    .replace("}", "")
                    .split(',');
                sql += ` ${table}.*, ${params[1]}.*`;
            } else {
                sql += ' *';
            }
        }
        if (table !== '') {
            sql += ` FROM ${table}`;
        }
        if (join) {
            params = join.replace("[", "")
                .replace("]", "")
                .replace("{", "")
                .replace("}", "")
                .split(',');
            params[0] = params[0] === 'iner' ? '' : params[0];
            sql += ` ${params[0]} join ${params[1]} on ${table}.${params[2]}=${params[1]}.${params[3]}`;
        }
        if (conditions) {
            sql += ' WHERE';
            const conditionsParams = conditions.substring(1, conditions.length - 1).replace("},{", "|").replace("{", "").replace("}", "").split('|');
            conditionsParams.filter(condition => {

                const params = condition.split(',', 2);
                const key = params[0];
                const sign = params[1] === 'e' ? '=' :
                    params[1] === 'gt' ? '>' :
                    params[1] === 'gte' ? '>=' :
                    params[1] === 'lt' ? '<' :
                    params[1] === 'lte' ? '<=' :
                    params[1];
                const value = condition.substring(condition.split(',', 2).join(',').length + 1, condition.length).replace("[", "(").replace("]", ")");
                sql += ` ${key} ${sign} ${value} ${operator}`;

            });
            sql = sql.slice(0, 0 - operator.length - 1);
        }
        if (group) {
            group = group.replace("[", "").replace("]", "");
            sql += ` GROUP BY ${group}`;
        }
        if (having) {
            sql += ' HAVING';
            const having_conditions = having.replace("[", "").replace("]", "").replace("},{", "|").replace("{", "").replace("}", "").split('|');
            having_conditions.filter(condition => {
                const params = condition.split(',');
                const key = params[0];
                const sign = params[1] === 'e' ? '=' :
                    params[1] === 'gt' ? '>' :
                    params[1] === 'gte' ? '>=' :
                    params[1] === 'lt' ? '<' :
                    params[1] === 'lte' ? '<=' :
                    params[1];
                const value = condition.substring(condition.split(',', 2).join(',').length + 1, condition.length).replace("[", "(").replace("]", ")");;
                sql += ` ${key} ${sign} ${value} ${having_operator}`
            });
            sql = sql.slice(0, 0 - having_operator.length - 1);
        }
        if (sort) {
            sort = sort.replace("[", "").replace("]", "").split(',');
            sort.filter(sortParam => {
                sortParam = sortParam.replace("{", "").replace("}", "").split(':');
                sortingConditions += sortParam[0] + ' ' + sortParam[1] + ', ';
            })
            sortingConditions = sortingConditions.slice(0, -2);
            sql += ` ORDER BY ${sortingConditions}`;
        }
        console.log(sql);
        const results = await connection.execute(sql);
        return results.rows;
    } catch (err) {
        return {
            'error': {
                type: 'error',
                message: `Can't find rows!`,
                error: err
            }
        }
    } finally {
        oracle_db.disconnectFromOracleDB(connection);
    }
}