const app = require('../app'),
      db = require("../database"),
      PORT = require("../config/config").port;
      
app.listen(PORT, () => {
  console.log('[+]Express listening on port:', PORT);
});
