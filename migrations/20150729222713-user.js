var dbm = require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
      db.createTable('users', {
        columns: {
          id: { type: 'int', primaryKey: true, autoIncrement: true },
          email: { type:'string'},
          password: { type:'string', }
        },
        ifNotExists: true
      }, callback);
};

exports.down = function(db, callback) {

};
