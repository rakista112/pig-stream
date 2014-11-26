var pigLatin = require('pig-latin');
var Transform = require('stream').Transform;
var util = require('util');

util.inherits(PigStream, Transform);

function PigStream(opt){
    Transform.call(this, opt);
}

PigStream.prototype._transform = function(data, encoding, callback){
    var output = pigLatin(data.toString());
    this.push(output);
    callback();
};

module.exports = PigStream;
