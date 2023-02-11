
const TABLE_NAME = {
    USER: 'user_info'
}

const SQLQUERYSTRING = {
    SELECT: `SELECT * from ${TABLE_NAME.USER} WHERE id = :userID`
    // INSERT:
}

module.exports = { SQLQUERYSTRING }