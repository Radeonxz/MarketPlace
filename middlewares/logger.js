const moduleName = 'logger';

const moment = require('moment');
const logger = (req, res, next) => {
  console.log(`${req.method}: ${req.protocol}://${req.get('host')}${req.originalUrl}, ${moment().format()}`);
  res.locals.client = {
    ip: (req.headers['x-forwarded-for'] || '').split(',').pop() || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress,
    route: req.originalUrl.slice(5),
  }
  next();
};
module.exports = logger;