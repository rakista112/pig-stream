var pigLatin = require('pig-latin');
var Transform = require('stream').Transform;
var util = require('util');

util.inherits(PigStream, Transform);

function PigStream(options){
    this.options = options;
    Transform.call(this, options);
}

PigStream.prototype._transform = function(data, encoding, callback){
    var output = pigLatin(data.toString(), this.options);
    this.push(output);
    callback();
};

module.exports = PigStream;
