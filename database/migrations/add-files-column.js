'use strict';
const FILES_TABLE = 'files';
async function up(trx) {
  return trx.schema.table(FILES_TABLE, function (table) {
    table.string('placeholder');
  });
}
async function down(trx) {
  return trx.schema.table(FILES_TABLE, function (table) {
    table.dropColumn('placeholder');
  });
}
module.exports = { up, down };
