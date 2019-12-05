const server = require('./api/server.js');

server.listen(1112, () => {
  console.log('\n*** Server Running on http://localhost:1112 ***\n');
});
