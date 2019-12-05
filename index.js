const server = require('./api/server.js');
const port = process.env.PORT || 1112;
server.listen(1112, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
