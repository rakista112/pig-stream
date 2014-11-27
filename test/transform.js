var chai = require('chai');
var should = chai.should();
var fs = require('fs');
var through = require('through');
var PigStream = require('./../index.js');
var util = require('util');

describe('Pig Stream', function(){

    describe('transform', function(){
	it('should transform input to pig latin', function(){
	    var sstream = fs.createReadStream('./test/assets/test.txt');
	    var pstream = new PigStream();
	    var exResult = 'ywhay otnay?';
	    var output = '';
	    sstream.pipe(pstream).pipe(through(function(data){
		output += data.toString();
	    }, function(data){
		output = output.trim();
		output.should.equal(exResult);
		sstream.close();
	    }));

	});

	it('should allow changing vowel endings if word starts with vowel', function(){
	    var sstream = fs.createReadStream('./test/assets/vowel.txt');
	    var pstream = new PigStream({vowelEnding: 'er'});
	    var exResult = 'ier amer anneer.';
	    var output = '';
	    sstream.pipe(pstream).pipe(through(function(data){
		output += data.toString();
	    }, function(data){
		output = output.trim();
		output.should.equal(exResult);
		sstream.close();
	    }));
	});
    });
});
