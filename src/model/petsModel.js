const db = require('../config');
const { getMultiple } = require('../utils/helper');

// getMutiple;
async function petsIndex() {
  const sql = 'SELECT * FROM pets WHERE archived = 0';
  const [rows] = await db.query(sql);
  return rows;
}
// function petsIndex() {
//   return getMultiple('SELECT * FROM pets11 WHERE archived = 0');
// }

module.exports = {
  petsIndex,
};
