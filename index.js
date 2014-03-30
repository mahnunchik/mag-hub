
var Transform = require('readable-stream/transform');

var hub = new Transform({objectMode: true});

hub._transform = function(chunk, encoding, cb) {
  cb(null, chunk);
};

module.exports = hub;
