const app = require('../app'),
      db = require("../database"),
      PORT = require("../config/config").port;

//drop and resync with { force: true }
db.sequelize.sync({force:true}).then(() => {
  app.listen(PORT, () => {
    console.log('Express listening on port:', PORT);
  });
});