var chai = require('chai');
var should = chai.should();
var fs = require('fs');
var through = require('through');
var PigStream = require('./../index.js');
var util = require('util');

describe('Pig Stream', function(){

    // initialize dummy prototype
    var sstream;

    beforeEach(function(){
	sstream = fs.createReadStream('./test/assets/test.txt');
    });

    afterEach(function(){
	sstream.close();
    });

    describe('transform', function(){
	it('should transform input to pig latin', function(){
	    var pstream = new PigStream();
	    var exResult = 'ywhay otnay?';
	    var output = '';
	    sstream.pipe(pstream).pipe(through(function(data){
		output += data.toString();
	    }, function(data){
		output = output.trim();
		output.should.equal(exResult);
	    }));
	});

	it('should allow changing vowel endings', function(){
	    var pstream = new PigStream({vowelEnding: 'er'});
	    
	});
    });
});
